import {
	Controller,
	Get,
	Param,
	Post,
	// Query,
	Body,
	Put,
	Delete,
	HttpStatus,
	HttpCode,
	// Res,
	// ParseIntPipe,
} from '@nestjs/common';
// import { Response } from 'express';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Get()
	getProducts() {
		// @Query('brand') brand: string, @Query('offset') offset: 0, @Query('limit') limit = 100,
		// return {
		// 	message: `paginated list products: limit =>${limit} & offset =>${offset} & brand =>${brand}`,
		// };
		return this.productsService.findAll();
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
	getOne(@Param('productId', ParseIntPipe) productId: number) {
		// return { message: `product ${productId}` };
		return this.productsService.findOne(productId);
	}

	@Post()
	create(@Body() payload: CreateProductDto) {
		// return {
		// 	message: 'accion de crear',
		// 	payload,
		// };
		return this.productsService.create(payload);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
		// return {
		// 	id,
		// 	payload,
		// };
		return this.productsService.update(+id, payload);
	}

	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.productsService.remove(+id);
	}
}
