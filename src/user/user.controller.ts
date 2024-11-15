import { Controller, Get } from "@nestjs/common";
import { ResponseDto } from "../response.dto";
import { UserService } from "./user.service";
import { UserResponseDto } from "./dto/user-response.dto";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<ResponseDto<UserResponseDto[]>> {
    const userResponseBeans = this.userService.getAllUsers();
    return ResponseDto.success(userResponseBeans);
  }
}
