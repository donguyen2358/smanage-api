const config = {
  production: {
    type: 'postgres',
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT || 5432,
    username: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: ['dist/**/migration/*.js'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
  },

  development: {
    type: 'postgres',
    host: process.env.PSQL_HOST || 'localhost',
    port: process.env.PSQL_PORT || 5432,
    username: process.env.PSQL_USER || 'postgres',
    password: process.env.PSQL_PASSWORD || '123456',
    database: process.env.PSQL_DATABASE || 'forestone',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: ['dist/**/migration/*.js'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
  },
};

const env = process.env.NODE_ENV || 'development';
export = config[env];
