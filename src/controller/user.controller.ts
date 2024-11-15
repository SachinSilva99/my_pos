import { Controller, Get } from "@nestjs/common";
import { ResponseBean } from "../bean/ResponseBean";
import { UserService } from "../service/user.service";
import { UserResponseBean } from "../bean/response/UserResponseBean";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<ResponseBean<UserResponseBean[]>> {
    const userResponseBeans = this.userService.getAllUsers();
    return ResponseBean.success(userResponseBeans);
  }
}
