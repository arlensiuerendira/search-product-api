import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({}, { strict: false });

export class Product extends mongoose.Document {
  @ApiProperty({
    example: '737628064502',
    description: 'The code of the product',
  })
  code: String;

  @ApiProperty({
    description:
      'The properties of a product, including for example: product_name, keywords, etc',
  })
  product: { [key: string]: any };
}
