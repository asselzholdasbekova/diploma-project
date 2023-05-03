import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";

export enum ProductStatus {
    HALAL = 'Halal',
    JAIZ = 'Jaiz',
    MUSHBOOH = 'Mushbooh',
    HARAM = 'Haram',
}

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
    @OneToOne(() => InfoEntity)
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;

    @Column()
    company: string;

    @Column({
        type: 'varchar',
        array: true
    })
    ingredients: string[];

    @Column({
        type: 'enum',
        enum: ProductStatus
    })
    status: ProductStatus;

    @Column({
        name: 'status_reason',
        type: 'text'
    })
    statusReason: string;
}
