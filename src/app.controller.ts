import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return 'Hello GetWonder';
	}

	@Get('endpoint')
	newEndPoint() {
		return 'Hello Endpoint';
	}

	@Get('/products/:productId')
	getProduct(@Param('productId') productId: string) {
		return `product ${productId}`;
	}

	@Get('/categories/:categoryId/products/:productId')
	getCategory(
		@Param('categoryId') categoryId: string,
		@Param('productId') productId: string,
	) {
		return `category ${categoryId} and product ${productId}`;
	}
}
