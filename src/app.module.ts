
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserController} from "./user/user.controller";
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'my_pos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],

})
export class AppModule {}
