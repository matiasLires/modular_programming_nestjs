import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { lastValueFrom } from 'rxjs';
const API_KEY_DEV = 123456789;
const API_KEY_PROD = 987654321;
@Module({
	imports: [HttpModule, UsersModule, ProductsModule],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: 'API_KEY',
			useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY_DEV,
		},
		{
			provide: 'TASKS',
			useFactory: async (http: HttpService) => {
				const tasks = await lastValueFrom(
					http.get('https://jsonplaceholder.typicode.com/todos'),
				);

				return tasks.data;
			},
			inject: [HttpService],
		},
	],
})
export class AppModule {}
