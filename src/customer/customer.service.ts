import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(
      createCustomerDto as Partial<Customer>,
    );
  }

  async findAll() {
    return await this.customerModel.findAll();
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  async findFullname(fullname: string) {
    return await this.customerModel.findOne({ where: { fullname } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.update(updateCustomerDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.customerModel.destroy({ where: { id } });
  }
}
