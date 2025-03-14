import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  Get,
  BadRequestException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return { message: 'User registered successfully' };
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  @HttpCode(200)
  async profile(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const userId = Number(req.user.user_id);
    if (isNaN(userId)) {
      throw new BadRequestException('Invalid user ID in token');
    }
    return await this.authService.getUserProfile(userId);
  }
}
