import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunction(): string {
    return 'We use product service!';
  }
  productFunction2(): string {
    return 'We use product service function 2!';
  }
  productJSON() {
    return {
      name: 'Shine Bo',
      lastname: 'Bo',
      age: 22,
      hobby: 'photography',
    };
  }
}
