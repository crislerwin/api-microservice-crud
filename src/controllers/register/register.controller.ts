import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/models/register.model';
import { Repository } from 'typeorm';

@Controller('register')
export class RegisterController {
  constructor(
    @InjectRepository(Register)
    private userRepo: Repository<Register>,
  ) {}

  @Get()
  index() {
    return this.userRepo.find();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.userRepo.findOneOrFail(id);
  }

  @Post()
  store(@Body() body) {
    const register = this.userRepo.create(body);
    return this.userRepo.save(register);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body) {
    await this.userRepo.findOneOrFail(id);
    this.userRepo.update({ id: +id }, body);
    return await this.userRepo.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    await this.userRepo.findOneOrFail(id);
    this.userRepo.delete(id);
  }
}
