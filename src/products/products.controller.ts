import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@UseInterceptors(CacheInterceptor)
@ApiTags('Search products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':code')
  @ApiOperation({ summary: 'Get product by code' })
  @ApiResponse({ status: 200, description: 'Item was found', type: Product })
  getProductByCode(@Param('code') code: string): Promise<Product> {
    return this.productsService.getProductByCode(code);
  }

  @Get()
  @ApiOperation({ summary: 'Get product by name' })
  @ApiResponse({ status: 200, description: 'Item was found', type: Product })
  getProductByName(@Query('name') productName: string): Promise<Product> {
    return this.productsService.getProductByName(productName);
  }
}
