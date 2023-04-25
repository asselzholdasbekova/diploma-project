import { TypeOrmConfigModule } from "@app/server/config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        TypeOrmConfigModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}