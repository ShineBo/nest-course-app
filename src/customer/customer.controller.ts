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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/create')
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    const createCustomer = await this.customerService.create(createCustomerDto);
    if (createCustomer == null) {
      throw new NotFoundException('Cannot create customer');
    }
    return {
      message: 'Customer created',
      date: createCustomer,
    };
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findCustomer = await this.customerService.findOne(+id);
    if (findCustomer == null) {
      throw new NotFoundException('Customer not found');
    }
    return findCustomer;
  }

  @Get('/findfullname/:fullname')
  async findFullname(@Param('fullname') fullname: string) {
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname == null) {
      throw new NotFoundException('Customer not found');
    }
    return findfullname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,) {
    const [updateCustomer] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    console.log(updateCustomerDto);
    if (updateCustomer === 0) {
      throw new NotFoundException('Cannot update customer');
    }
    return { message: 'Customer updated' };
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destoryCustomer = await this.customerService.remove(+id);
    console.log(destoryCustomer);
    if (destoryCustomer == 0) {
      throw new NotFoundException('Cannot delete customer');
    }
    return { message: 'Customer deleted' };
  }
}
