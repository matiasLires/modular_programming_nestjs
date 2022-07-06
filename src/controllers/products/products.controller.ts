import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
	@Get()
	getPaginatedList(
		@Query('limit') limit = 100,
		@Query('offset') offset: number,
		@Query('brand') brand: string,
	) {
		return {
			message: `paginated list products: limit =>${limit} & offset =>${offset} & brand =>${brand}`,
		};
	}

	@Get('filter')
	getWithFilter() {
		return `filter`;
	}

	@Get(':productId')
	getOne(@Param('productId') productId: string) {
		return { message: `product ${productId}` };
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'accion de crear',
			payload,
		};
	}
}
