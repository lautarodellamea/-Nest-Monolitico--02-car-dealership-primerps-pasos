import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      name: 'Corolla'
    },
    {
      id: 2,
      brand: 'Nissan',
      name: 'Almera'
    },
    {
      id: 3,
      brand: 'Ford',
      name: 'Mustang'
    }
  ]


  public findAll() {
    return this.cars;
  }

  public findOne(id: number) {
    const car = this.cars.find(car => car.id === id);


    if (!car) {
      // throw new NotFoundException()
      throw new NotFoundException(`Auto con id: ${id} no encontrado.`) // lo que pongo dentro vendra como el message del error
    }



    return car
  }


}
