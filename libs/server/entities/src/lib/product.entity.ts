import { Entity } from "typeorm";
import OfferEntity from "./offer.entity";

@Entity({ name: 'products' })
export class ProductEntity extends OfferEntity {

}
