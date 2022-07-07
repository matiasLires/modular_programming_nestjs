import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCustomerDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;
	@IsString()
	@IsNotEmpty()
	readonly lastName: string;
	@IsString()
	@IsNotEmpty()
	@IsPhoneNumber()
	readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
