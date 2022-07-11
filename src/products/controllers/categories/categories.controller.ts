import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dtos/category.dto';
import { CategoriesService } from '../../services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
	constructor(private categoriesServices: CategoriesService) {}

	// @Get(':categoryId/products/:productId')
	// getCategory(
	// 	@Param('categoryId') categoryId: string,
	// 	@Param('productId') productId: string,
	// ) {
	// 	return { message: `category ${categoryId} and product ${productId}` };
	// }

	@Get()
	findAll() {
		return this.categoriesServices.findAll();
	}
	@Get(':id')
	get(@Param('id', ParseIntPipe) id: number) {
		return this.categoriesServices.findOne(id);
	}

	@Post()
	create(@Body() payload: CreateCategoryDto) {
		return this.categoriesServices.create(payload);
	}

	@Put(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() payload: UpdateCategoryDto,
	) {
		return this.categoriesServices.update(id, payload);
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.categoriesServices.remove(id);
	}
}
