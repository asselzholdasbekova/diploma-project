import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { OfferEntity } from "./offer.entity";

@Entity({ name: 'requests' })
export class RequestEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(() => OfferEntity, (offer) => offer.id)
    @JoinColumn({ name: 'offer_id' })
    offer: OfferEntity;

    @Column()
    status: string         // tozhe enum dolzhno byt

    @Column({ type: 'text' })
    reason: string
}