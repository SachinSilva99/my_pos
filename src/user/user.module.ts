import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {Repository} from "typeorm";
import {UserEntity} from "./entity/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],  // Import TypeOrmModule with the UserEntity
    controllers: [UserController],
    providers: [UserService, Repository],

})
export class UserModule {

}
