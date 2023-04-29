import { Entity } from "typeorm";
import OfferEntity from "./offer.entity";

@Entity({ name: 'hostels' })
export class HostelEntity extends OfferEntity {}
