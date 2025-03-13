import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { UserInfo } from '../user-info/entities/user-info.entity'; // Import UserInfo model
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
    }),
    SequelizeModule.forFeature([AuthUser, UserInfo]), // Add UserInfo model
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
