import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfo } from './entities/user-info.entity';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private userInfoModel: typeof UserInfo,
  ) {}

  create(createUserInfoDto: CreateUserInfoDto) {
    return 'This action adds a new userInfo';
  }

  async findAll() {
    return await this.userInfoModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfo`;
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return `This action updates a #${id} userInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userInfo`;
  }
}
