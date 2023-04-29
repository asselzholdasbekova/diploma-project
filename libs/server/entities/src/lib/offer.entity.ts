import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from "./base.entity";
import { LocationEntity } from "./location.entity";
import { ReviewEntity } from "./review.entity";

export default abstract class OfferEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(() => LocationEntity, (location) => location.id)
    @JoinColumn({ name: 'location_id' })
    location: LocationEntity;

    @OneToMany(() => ReviewEntity, (review) => review.offer)
    reviews: ReviewEntity[];
}