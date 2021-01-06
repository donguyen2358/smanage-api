import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
// import { nestCsrf, CsrfFilter } from 'ncsrf';
// import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Forest One API')
    .setDescription('The Forest One API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // Waiting to verify from customer
  //Require use cookieParser for nestCsrf
  // app.use(cookieParser());
  // app.use(nestCsrf({ ttl: 86400 }));
  //Use for custom response message
  // app.useGlobalFilters(new CsrfFilter());
  //Need replace origin to web client url
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
