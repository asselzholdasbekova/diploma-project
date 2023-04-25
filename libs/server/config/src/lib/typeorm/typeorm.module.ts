import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Entities from '@app/server/entities';
import { TypeOrmConfig } from './typeorm.config';
import { ConfigModule } from '@nestjs/config';

/**
 * # Module, providing Typeorm database for the application.
 */
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        {
          module: class {},
          providers: [TypeOrmConfig],
          exports: [TypeOrmConfig],
        },
      ],
      inject: [TypeOrmConfig],
      useFactory: (config: TypeOrmConfig) => {
        const entities = Object.keys(Entities).map(
          (entityKey) => Entities[entityKey]
        );

        return {
          type: 'postgres',
          ...config.fullConfig,
          entities,
        };
      }
    }),
  ],
})
export class TypeOrmConfigModule {}
