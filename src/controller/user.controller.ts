import { Controller, Get } from "@nestjs/common";
import { ResponseBean } from "../bean/ResponseBean";

@Controller("/users")
export class UserController {
  @Get()
  async getAllUsers(): Promise<ResponseBean<string>> {
    return ResponseBean.success<string>("all users");
  }
}
