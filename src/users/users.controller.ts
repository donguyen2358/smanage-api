import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FindOneParams } from 'src/shared/dto/id.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
// TODO: un-comment below line to enable authentication for user controller
// @UseGuards(new JwtAuthGuard())
@ApiBearerAuth()
export class UsersController {
  constructor(private userService: UserService) {}
  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  @Get()
  async find(): Promise<User[]> {
    return this.userService.find();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  async findById(@Param() param: FindOneParams): Promise<User> {
    return this.userService.findById(param.id);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  async update(
    @Param() param: FindOneParams,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.update(param.id, updateUserDTO);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async delete(@Param() param: FindOneParams): Promise<User> {
    return this.userService.delete(param.id);
  }

  @Post('/generate-password')
  @ApiParam({ name: 'id' })
  async generatePassword(@Param() param: FindOneParams): Promise<string> {
    return this.userService.generatePassword(param.id);
  }
}
