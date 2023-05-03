import { Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

@Entity({ name: 'hostels' })
export class HostelEntity extends BaseEntity {
    @OneToOne(() => InfoEntity)
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;
}
