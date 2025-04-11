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

  app.useStaticAssets(join(__dirname, '..', './static'), {
    prefix: '/static',
  });
  app.useGlobalInterceptors(new LayoutInterceptor(new Reflector()));
  app.setViewEngine('hbs');

  app.setBaseViewsDir(join(__dirname, '..', './views'));
  app.set('view cache', false);

  if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
      hbs.registerPartials(join(__dirname, '..', './views/partials'));
      next();
    });
  }

  await app.listen(port).then(() => {
    const bold = '\x1b[1m';
    const reset = '\x1b[0m';
    logger.log(
      `Application is running on: ${bold}http://localhost:${port}${reset}`,
    );
  });
}
bootstrap();
