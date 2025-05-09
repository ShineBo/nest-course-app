import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from '../user-info/entities/user-info.entity'; // Import UserInfo model
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthUser)
    private authUserModel: typeof AuthUser,

    @InjectModel(UserInfo) // Inject UserInfo model
    private userInfoModel: typeof UserInfo,

    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const authuser = await this.authUserModel.findOne({
      where: { email: registerDto.email },
    });
    if (authuser) {
      throw new BadRequestException(
        'Email already exists. Please use another email',
      );
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(registerDto.password, salt);

    const newUser = await this.authUserModel.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashedPassword,
    });
    return newUser;
  }

  async login(loginDto: LoginDto) {
    const authuser = await this.authUserModel.findOne({
      where: { email: loginDto.email },
    });
    if (!authuser) {
      throw new UnauthorizedException(
        'This email does not exist, please try again',
      );
    }

    const isVaild = await compare(loginDto.password, authuser.password);
    if (!isVaild) {
      throw new UnauthorizedException('error password!!!');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const payLoad = { user_id: authuser.id };
    const token = await this.jwtService.signAsync(payLoad, {
      secret: process.env.JWT_SECRET,
    });

    return { access_token: token };
  }

  async getUserProfile(id: number) {
    const user = await this.authUserModel.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const userInfo = await this.userInfoModel.findOne({
      where: { id }, // Assuming `user_id` in `UserInfo` matches `id` in `AuthUser`
    });

    return {
      authUser: user,
      userInfo: userInfo || null,
    };
  }
}
