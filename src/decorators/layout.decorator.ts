import { SetMetadata } from '@nestjs/common';

export const LAYOUT_KEY = 'layout';

export const Layout = (layout: string) => SetMetadata(LAYOUT_KEY, layout);
