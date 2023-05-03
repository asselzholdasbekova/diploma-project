import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

export enum ReviewEvaluation {
    EXCELLENT = 5,
    GOOD = 4,
    AVERAGE = 3,
    POOR = 2,
    TERRIBLE = 1,
}

@Entity({ name: 'reviews' })
export class ReviewEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: ReviewEvaluation
    })
    evaluation: ReviewEvaluation;

    @Column({
        name: 'date_of_visit'
    })
    dateOfVisit: Date

    @Column({ type: 'text' })
    comment: string;

    @ManyToOne(
        () => InfoEntity, 
        (info) => info.reviews
    )
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;
}