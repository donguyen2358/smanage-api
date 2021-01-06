import { Controller, Get, Post, Req } from '@nestjs/common';
import { Csrf } from 'ncsrf';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Generate token here
  // @Get('token')
  // getCsrfToken(@Req() req): any {
  //   return {
  //     token: req.csrfToken(),
  //   };
  // }

  //Protected route with csrf
  // @Post()
  // @Csrf()
  // needProtect(): string {
  //   return 'Protected!';
  // }
}
