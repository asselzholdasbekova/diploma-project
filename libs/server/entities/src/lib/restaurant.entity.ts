import { Column, Entity } from "typeorm";
import OfferEntity from "./offer.entity";

@Entity({ name: 'restaurants' })
export class RestaurantEntity extends OfferEntity {
    @Column({
        name: 'has_prayer_room'
    })
    hasPrayerRoom: boolean;
}
