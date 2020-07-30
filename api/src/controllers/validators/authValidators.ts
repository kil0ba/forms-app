import {IsString, MinLength} from "class-validator";

export class SignUpValidator {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @MinLength(5)
  @IsString()
  password: string;

  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

}
