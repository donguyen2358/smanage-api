import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}
