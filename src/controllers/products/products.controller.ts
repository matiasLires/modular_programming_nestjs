import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
	@Get()
	getProducts(
		@Query('limit') limit = 100,
		@Query('offset') offset: number,
		@Query('brand') brand: string,
	) {
		return `paginated list products: limit =>${limit} & offset =>${offset} & brand =>${brand}`;
	}

	@Get('filter')
	getProductFilter() {
		return `filter`;
	}

	@Get(':productId')
	getProduct(@Param('productId') productId: string) {
		return `product ${productId}`;
	}
}
