import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//both interfaces and classes can be used as DTOs(data transfer object), here we used classes because we had to make use of class validators
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
