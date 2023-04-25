export class TypeOrmConfig  {
  get fullConfig() {
    return {
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: !process.env.TYPEORM_NO_SYNCHRONIZE,
      migrationsRun: !process.env.TYPEORM_NO_MIGRATION_RUN,
      logging: !process.env.TYPEORM_NO_LOGGING,
      ssl: !process.env.TYPEORM_NO_SSL_CERT
    };
  }
}
