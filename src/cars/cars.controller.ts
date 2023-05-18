import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) {}

    @Post()
    createCar(@Body() createCarDto: CreateCarDto): CreateCarDto {
        return this.carService.createCar(createCarDto)
    }

    @Get()
    getAllCars(): Car[] {
        return this.carService.getAllCars()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) idCar: string): Car {
        return this.carService.getCarById(idCar)
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto): UpdateCarDto {
        return this.carService.updateCar(id, updateCarDto)
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string): void {
        return this.carService.delete(id)
    }

}
