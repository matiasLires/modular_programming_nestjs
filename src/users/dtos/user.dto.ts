import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsEmail()
	readonly email: string;
	@IsString()
	@IsNotEmpty()
	@Length(6)
	readonly password: string;
	@IsString()
	@IsNotEmpty()
	readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
