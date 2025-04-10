import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { LayoutInterceptor } from './interceptors/layout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT ?? 3000;
  const logger = new Logger();
  app.useGlobalInterceptors(new LayoutInterceptor(new Reflector()));
  app.setViewEngine('hbs');
  app.useStaticAssets(join(__dirname, '..', './static'), {
    prefix: '/static',
  });
  app.setBaseViewsDir(join(__dirname, '..', './views'));
  hbs.registerHelper('hello', (name: string) => {
    return `Hello ${name}`;
  });

  await app.listen(port).then(() => {
    const bold = '\x1b[1m';
    const reset = '\x1b[0m';
    logger.log(
      `Application is running on: ${bold}http://localhost:${port}${reset}`,
    );
  });
}
bootstrap();
