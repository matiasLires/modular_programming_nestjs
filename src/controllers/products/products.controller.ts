import {
	Controller,
	Get,
	Param,
	Post,
	Query,
	Body,
	Put,
	Delete,
	HttpStatus,
	HttpCode,
	// Res,
} from '@nestjs/common';

// import { Response } from 'express';
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

	// @Get(':productId')
	// @HttpCode(HttpStatus.ACCEPTED)
	// getOne(@Res() response: Response, @Param('productId') productId: string) {
	// 	response.status(200).send({ message: `product ${productId}` });
	// }
	@Get(':productId')
	@HttpCode(HttpStatus.ACCEPTED)
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

	@Put(':id')
	update(@Param('id') id: number, @Body() payload: any) {
		return {
			id,
			payload,
		};
	}

	@Delete(':id')
	delete(@Param('id') id: number) {
		return id;
	}
}
