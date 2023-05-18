import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {Car} from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id: uuid(),
            brand: "Honda",
            model: "Civic"
        },
        {
            id: uuid(),
            brand: "Jeep",
            model: "Cherokee"
        }
    ]

    createCar( createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car)

        return car
    }

    getAllCars(): Car[] {
        return this.cars
    }

    getCarById(id: string): Car {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException() 
        return car
    }

    updateCar(id: string, updateCarDto: UpdateCarDto): UpdateCarDto {
        let carDB = this.getCarById(id)
        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Car ID is not valid inside body`)
        }
        
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB
            }
            return car
        })
        return carDB
    }

    delete(id: string) {

        const car = this.getCarById(id)
        this.cars = this.cars.filter(car => car.id !== id)

    }
}
