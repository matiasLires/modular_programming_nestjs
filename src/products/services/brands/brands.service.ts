import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../../dtos/brand.dtos';
import { Brand } from '../../entities/brand.entity';

@Injectable()
export class BrandsService {
	private counterId = 1;
	private brands: Brand[] = [
		{
			id: 1,
			name: 'Brand 1',
			image: 'https://avatars.githubusercontent.com/u/65123861?v=4',
		},
	];

	findAll() {
		return this.brands;
	}

	findOne(id: number) {
		const product = this.brands.find((item) => item.id === id);
		if (!product) {
			throw new NotFoundException(`Brand #${id} not found`);
		}
		return product;
	}

	create(data: CreateBrandDto) {
		this.counterId = this.counterId + 1;
		const newBrand = {
			id: this.counterId,
			...data,
		};
		this.brands.push(newBrand);
		return newBrand;
	}

	update(id: number, changes: UpdateBrandDto) {
		const brand = this.findOne(id);
		if (brand) {
			const index = this.brands.findIndex((item) => item.id === id);
			this.brands[index] = {
				...brand,
				...changes,
			};
			return this.brands[index];
		}
		return null;
	}

	remove(id: number) {
		const index = this.brands.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new NotFoundException(`Brand #${id} not found`);
		}
		this.brands.splice(index, 1);
		return true;
	}
}
