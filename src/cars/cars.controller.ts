import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }




  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  // getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) { // validamos que sea un uuid v4
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });

    return {
      car: this.carsService.findOne(id)
    }
  }

  @Post()
  createCar(@Body() CreateCarDto: CreateCarDto) {

    return this.carsService.create(CreateCarDto)
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {

    return this.carsService.update(id, updateCarDto)

  }



  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id)

  }


}
