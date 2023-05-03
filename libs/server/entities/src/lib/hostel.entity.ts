import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";
import { RestaurantEntity } from "./restaurant.entity";

@Entity({ name: 'hostels' })
export class HostelEntity extends BaseEntity {
    @OneToOne(() => InfoEntity)
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;

    @Column({
        name: 'has_restaurant'
    })
    hasRestaurant: boolean;

    @OneToOne(() => RestaurantEntity)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: RestaurantEntity;

    @Column()
    website: string;

    @Column({
        name: 'min_price'
    })
    minPrice: number;

    @Column({
        name: 'max_price'
    })
    maxPrice: number;
}
