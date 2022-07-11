import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;
	@IsString()
	@IsNotEmpty()
	readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
