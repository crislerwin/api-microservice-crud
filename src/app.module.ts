import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/user.model';
import { Product } from './models/product.model';
import { UserController } from './controllers/user/user.controller';
import { ProductController } from './controllers/product/product.controller';
import {Register} from './models/register.model';
import { RegisterController } from './controllers/register/register.controller';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Product, Register],
    }),
    TypeOrmModule.forFeature([User, Product, Register]),
  ],
  controllers: [AppController, UserController, ProductController, RegisterController],
  providers: [AppService],
})
export class AppModule {}
