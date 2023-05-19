import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/car.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

constructor(
  private readonly carSevice: CarsService,
  private readonly brandService: BrandsService
  ) {}

  populateDB() {
    this.carSevice.fillCarWithSeedData(CARS_SEED)
    this.brandService.fillBransWithSeedData(BRANS_SEED)
    return 'SEED Executed'
  }
}
