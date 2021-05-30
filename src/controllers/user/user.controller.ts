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
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
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
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
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
