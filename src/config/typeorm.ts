import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user';

export default () => {
  return {
    type: 'postgres',
    url: 'postgresql://mydb_jjij_user:bD8UHxNxDbt52c88eg5DspYMG6RNAWlk@dpg-cvtqo1a4d50c73am3i40-a.oregon-postgres.render.com/mydb_jjij',
    entities: [User],
    synchronize: true,
    ssl: true,
  } as TypeOrmModuleOptions;
};
