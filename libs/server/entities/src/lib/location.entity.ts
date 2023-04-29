import { Column, Entity } from "typeorm";
import BaseEntity from "./base.entity";

@Entity({ name: 'locations' })
export class LocationEntity extends BaseEntity {
    @Column()
    country: string;

    @Column()
    city: string

    @Column()
    address: string
}