
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserController} from "./controller/user.controller";

@Module({
  controllers: [UserController],

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'my_pos',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
