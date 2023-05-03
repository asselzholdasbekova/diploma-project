import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

export enum RequestStatus {
    HALAL = 'Halal',
    JAIZ = 'Jaiz',
    MUSHBOOH = 'Mushbooh',
    HARAM = 'Haram',
}

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
    @JoinColumn({ 
        name: 'info_id' 
    })
    info: InfoEntity;

    @Column({
        type: 'enum',
        enum: RequestStatus
    })
    status: RequestStatus

    @Column({ 
        name: 'status_reason',
        type: 'text'
    })
    statusReason: string
}