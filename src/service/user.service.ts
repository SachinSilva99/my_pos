import { Injectable } from "@nestjs/common";
import { UserResponseBean } from "../bean/response/UserResponseBean";

@Injectable()
export class UserService {
  getAllUsers(): UserResponseBean[] {
    return [];
  }
}
