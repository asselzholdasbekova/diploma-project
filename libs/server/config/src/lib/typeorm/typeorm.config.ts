import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get('TYPEORM_HOST'),
            port: configService.get('TYPEORM_PORT'),
            database: configService.get('TYPEORM_DATABASE'),
            username: configService.get('TYPEORM_USERNAME'),
            password: configService.get('TYPEORM_PASSWORD'),
            synchronize: configService.get('TYPEORM_SYNCHRONISE'),
            logging: configService.get('TYPEORM_LOGGING')
        }
    }
}

export const typeormConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => 
    TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
}