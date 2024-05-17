import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RackTypeService } from './rack-type.service';
import { CreateRackTypeDto } from './dto/create-rack-type.dto';
import { UpdateRackTypeDto } from './dto/update-rack-type.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rack-type')
export class RackTypeController {
  constructor(private readonly rackTypeService: RackTypeService) {}

  @Post('create-rack-type')
  @MessagePattern("createRackType")// se comunica con la api por medio de message pattern
  create(@Body() createRackTypeDto: CreateRackTypeDto) {
    return this.rackTypeService.createRackType(createRackTypeDto);
  }

  @Get('/find-all-rack-types')
  @MessagePattern("findAllRackTypes")
  findAll() {
    return this.rackTypeService.findAllRackTypes();
  }

  @Get('/find-one-rack-type/:id') 
  @MessagePattern('findOneRackType')
  findOne(id: string) {
    return this.rackTypeService.findOneRackType(id);
  }

  @Put('/update-rack-type/:id')
  @MessagePattern('updateRackType')
  update(payload) { 
    console.log(payload) 
    return this.rackTypeService.updateRackType(payload.id, payload.updateRackTypeDto);
  }

  @Delete('/delete-rack-type/:id')
  @MessagePattern('removeRackType')
  remove(id: string) {
    return this.rackTypeService.removeRackType(id);
  }
}
