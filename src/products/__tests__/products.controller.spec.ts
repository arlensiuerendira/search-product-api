import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products.controller';
import { ProductsModule } from '../products.module';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

const mockProduct = {
  code: '123',
  product: { product_name: 'thai noodle' },
};

describe('ProductsController', () => {
  let controller: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProductsModule],
    })
      .overrideProvider(getModelToken(Product.name))
      .useValue(jest.fn())
      .compile();

    controller = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getProductByCode', () => {
    it('must return a Product', async () => {
      jest.spyOn(productsService, 'getProductByCode').mockImplementation(() =>
        Promise.resolve({
          code: '123',
          product: { product_name: 'thai noodle' },
        } as unknown as Promise<any>),
      );

      const result = await controller.getProductByCode('123');

      expect(result).toEqual(mockProduct);
      expect(productsService.getProductByCode).toHaveBeenCalledTimes(1);
    });
  });

  describe('getProductByName', () => {
    it('must return a Product', async () => {
      jest
        .spyOn(productsService, 'getProductByName')
        .mockImplementation(() =>
          Promise.resolve(mockProduct as unknown as Promise<any>),
        );

      const result = await controller.getProductByName('thai noodle');

      expect(result).toEqual({
        code: '123',
        product: { product_name: 'thai noodle' },
      });
      expect(productsService.getProductByName).toHaveBeenCalledTimes(1);
    });
  });
});
