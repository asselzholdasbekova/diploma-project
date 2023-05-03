import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

export enum PrayerRoomType {
    COMMON = 'Common',
    SEPARATE = 'Separate'
}

@Entity({ name: 'prayer-rooms' })
export class PrayerRoomEntity extends BaseEntity {
    @OneToOne(() => InfoEntity)
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;

    @Column({
        type: 'enum',
        enum: PrayerRoomType
    })
    type: PrayerRoomType;
}
