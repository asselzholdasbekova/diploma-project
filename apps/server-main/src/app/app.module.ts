import { Module } from "@nestjs/common";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { ProductsModule } from "./products/products.module";
import { HostelsModule } from "./hostels/hostels.module";
import { PrayerRoomsModule } from "./prayer-rooms/prayer-rooms.module";
import { TypeOrmConfigModule } from "@app/server/config";

@Module({
    imports: [
        TypeOrmConfigModule,
        RestaurantsModule,
        ProductsModule,
        HostelsModule,
        PrayerRoomsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}