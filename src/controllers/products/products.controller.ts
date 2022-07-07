import {
	Controller,
	Get,
	Param,
	Post,
	Body,
	Put,
	Delete,
	ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Get()
	findAll() {
		return this.productsService.findAll();
	}

	@Get(':id')
	get(@Param('id', ParseIntPipe) id: number) {
		return this.productsService.findOne(id);
	}

	@Post()
	create(@Body() payload: CreateProductDto) {
		return this.productsService.create(payload);
	}

	@Put(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() payload: UpdateProductDto,
	) {
		return this.productsService.update(id, payload);
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.productsService.remove(id);
	}
}
