import { Injectable } from "@nestjs/common";
import { UserResponseDto } from "./dto/user-response.dto";

@Injectable()
export class UserService {
  getAllUsers(): UserResponseDto[] {
    return [];
  }
}
