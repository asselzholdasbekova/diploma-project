import { Entity } from "typeorm";
import OfferEntity from "./offer.entity";

@Entity({ name: 'prayer-rooms' })
export class PrayerRoomEntity extends OfferEntity {
    
}
