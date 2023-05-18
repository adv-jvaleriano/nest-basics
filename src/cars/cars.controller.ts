import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Car, CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) {}

    @Post()
    createCar(@Body() body: Car): Car {
        return body
    }

    @Get()
    get(): Car[] {
        return this.carService.getAllCars()
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) idCar: number): Car {
        return this.carService.getCarById(idCar)
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Car): Car {
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number): object {
        return {
            method: 'DELETE',
            id
        }
    }

}
