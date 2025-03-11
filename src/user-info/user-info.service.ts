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

  async create(createUserDto: CreateUserInfoDto) {
    return await this.userInfoModel.create(createUserDto as Partial<UserInfo>);
  }

  async findAll() {
    return await this.userInfoModel.findAll();
  }

  async findOne(id: number) {
    return await this.userInfoModel.findByPk(id);
  }

  async findByLastName(lastname: string) {
    return await this.userInfoModel.findOne({ where: { lastname } });
  }

  async update(id: number, updateUserDto: UpdateUserInfoDto) {
    return await this.userInfoModel.update(updateUserDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.userInfoModel.destroy({ where: { id } });
  }
}
