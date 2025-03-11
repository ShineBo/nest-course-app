import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';

@Controller('userInfo')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create')
  async createCustomer(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null) {
      throw new NotFoundException('Cannot create user info');
    }
    return {
      message: 'User Info created',
      date: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findUserInfo = await this.userInfoService.findOne(+id);
    if (findUserInfo == null) {
      throw new NotFoundException('Customer not found');
    }
    return findUserInfo;
  }

  @Get('/findlastname/:lastname')
  async findFullname(@Param('lastname') lastname: string) {
    const findlastname = await this.userInfoService.findByLastName(lastname);
    if (findlastname == null) {
      throw new NotFoundException('Customer not found');
    }
    return findlastname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo === 0) {
      throw new NotFoundException('Cannot update User Info');
    }
    return { message: 'User Info updated' };
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destoryUserInfo = await this.userInfoService.remove(+id);
    console.log(destoryUserInfo);
    if (destoryUserInfo == 0) {
      throw new NotFoundException('Cannot delete User Info');
    }
    return { message: 'User Info deleted' };
  }
}
