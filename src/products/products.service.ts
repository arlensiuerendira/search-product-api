import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  getProductByCode(code: string) {
    return this.findProductByFilter({ code });
  }

  getProductByName(product_name: string) {
    return this.findProductByFilter({ 'product.product_name': product_name });
  }

  async findProductByFilter(filter: { [key: string]: string }) {
    const product = await this.productModel.findOne(filter);
    if (!product) {
      throw new NotFoundException('Product was not found');
    }
    return product;
  }
}
