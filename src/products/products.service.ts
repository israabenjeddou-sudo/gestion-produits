
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'clavier', price: 130 },
    { id: 2, name: 'Souris', price: 40 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const p = this.products.find(x => x.id === id);
    return p;
  }
}
