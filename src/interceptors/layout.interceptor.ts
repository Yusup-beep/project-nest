import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { LAYOUT_KEY } from '../decorators/layout.decorator';

@Injectable()
export class LayoutInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const handler = context.getHandler();

    const layout = this.reflector.get<string>(LAYOUT_KEY, handler);
    return next.handle().pipe(
      map((data) => {
        if (layout) {
          data.layout = layout;
        }
        return data;
      }),
    );
  }
}
