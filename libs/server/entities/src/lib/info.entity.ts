import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from "./base.entity";
import { LocationEntity } from "./location.entity";
import { ReviewEntity } from "./review.entity";

@Entity({ name: 'info' })
export class InfoEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(
        () => LocationEntity, 
        (location) => location.id
    )
    @JoinColumn({ name: 'location_id' })
    location: LocationEntity;

    @OneToMany(
        () => ReviewEntity, 
        (review) => review.info
    )
    reviews: ReviewEntity[];

    @Column({
        nullable: true
    })
    rating: number;
}