import { IsAlpha, MaxLength, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsAlpha()
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsAlpha()
  @MaxLength(255)
  restaurantName: string;
}
