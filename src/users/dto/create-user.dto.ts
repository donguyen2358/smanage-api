import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsPhoneNumber, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsAlpha()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phone: string;
}
