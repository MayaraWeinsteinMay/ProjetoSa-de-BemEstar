import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Saúde e Bem Estar')
    .setDescription('Projeto Saúde e Bem Estar')
    .setContact('Generation Brasil', 'www.genbr.com.br', 'saudemob2022@gmail.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger', app, document)

    process.env.TZ ='-03:00'
app.useGlobalPipes(new ValidationPipe())
app.enableCors()
  await app.listen(4000);
}
bootstrap();
