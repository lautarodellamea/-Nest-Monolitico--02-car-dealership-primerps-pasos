import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Nissan',
    //   model: 'Almera'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Mustang'
    // }
  ];

  public findAll() {
    return this.cars;
  }

  public findOne(id: string) {
    const car = this.cars.find(car => car.id === id);


    if (!car) {
      // throw new NotFoundException()
      throw new NotFoundException(`Auto con id: ${id} no encontrado.`) // lo que pongo dentro vendra como el message del error
    }



    return car
  }

  public create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };
    this.cars.push(newCar);

    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOne(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`No puedes cambiar el id del auto esto esta protegido`)
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

  public delete(id: string) {
    const car = this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    // return ` El auto con id: ${id} ha sido eliminado.`
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
