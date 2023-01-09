import { createMock } from '@golevelup/ts-jest';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Query } from 'mongoose';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

const mockProduct = {
  code: '123',
  product: { product_name: 'thai noodle' },
};

describe('ProductsService', () => {
  let productsService: ProductsService;
  let model: Model<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken('Product'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockProduct), //notsure why
            constructor: jest.fn().mockResolvedValue(mockProduct), //notsure why
            find: jest.fn(),
            findOne: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndRemove: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
    model = module.get<Model<Product>>(getModelToken('Product'));
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get product by code', async () => {
    jest.spyOn(model, 'findOne').mockReturnValueOnce(mockProduct as any);

    const foundProduct = await productsService.getProductByCode('123');
    expect(foundProduct).toEqual(mockProduct);
  });

  it('should get product by name', async () => {
    jest.spyOn(model, 'findOne').mockReturnValueOnce(mockProduct as any);

    const foundProduct = await productsService.getProductByName('thai noodle');
    expect(foundProduct).toEqual(mockProduct);
  });
});
