import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { getEnvPath } from '../common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/../common/envs`);
console.log('envFilePath :>> ', envFilePath);
dotenv.config({ path: envFilePath });

const dataSource = new DataSource({
  type: process.env.DATABASE_TYPE as 'mysql' | 'mssql' | 'postgres' | 'mongodb',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: +process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['migrations/*.{ts,js}'],
  logger: 'file',
  options: {
    encrypt: false,
  },
});

export default dataSource;
