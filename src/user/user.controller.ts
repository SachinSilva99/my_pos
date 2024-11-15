import { Controller, Get } from "@nestjs/common";
import { ResponseDto } from "../response.dto";
import { UserService } from "./user.service";
import {UserEntity} from "./entity/user.entity";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<ResponseDto<UserEntity[]>> {
    const userResponseBeans = await this.userService.getAllUsers();
    return ResponseDto.success(userResponseBeans);
  }
}
