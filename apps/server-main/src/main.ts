import { NestFactory } from '@nestjs/core';
import { ServerMainModule } from './server-main.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerMainModule);
  await app.listen(3000);
}
bootstrap();
