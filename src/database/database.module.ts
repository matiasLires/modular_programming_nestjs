import { Module, Global } from '@nestjs/common';

const API_KEY_DEV = 'DEV123456789';
const API_KEY_PROD = 'PROD987654321';

@Global()
@Module({
	providers: [
		{
			provide: 'API_KEY',
			useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY_DEV,
		},
	],
	exports: ['API_KEY'],
})
export class DatabaseModule {}
