import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';

@Module({
  imports: [SequelizeModule.forFeature([AuthUser])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
