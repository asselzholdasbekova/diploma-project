import { Module } from "@nestjs/common";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { ProductsModule } from "./products/products.module";
import { HostelsModule } from "./hostels/hostels.module";
import { PrayerRoomsModule } from "./prayer-rooms/prayer-rooms.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { typeormConfigAsync } from "@app/server/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync(typeormConfigAsync),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        RestaurantsModule,
        ProductsModule,
        HostelsModule,
        PrayerRoomsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}