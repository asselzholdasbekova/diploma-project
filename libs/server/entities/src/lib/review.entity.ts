import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./base.entity";
import OfferEntity from "./offer.entity";


@Entity({ name: 'reviews' })
export class ReviewEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    evaluation: number;           //zdes luchshe enum sdelat

    @Column({ type: 'text' })
    comment: string;

    @ManyToOne(() => OfferEntity, (offer) => offer.reviews)
    @JoinColumn({ name: 'offer_id' })
    offer: OfferEntity;
}