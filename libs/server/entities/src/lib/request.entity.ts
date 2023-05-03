import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

@Entity({ name: 'requests' })
export class RequestEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(
        () => InfoEntity, 
        (info) => info.id
    )
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;

    @Column()
    status: string         // tozhe enum dolzhno byt

    @Column({ 
        type: 'text' 
    })
    reason: string
}