import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base.entity";
import { InfoEntity } from "./info.entity";
import { PrayerRoomEntity } from "./prayer-room.entity";

export enum RestaurantType {
    RESTAURANT = 'Restaurant',
    CAFE = 'Cafe',
    FASTFOOD = 'Fast Food',
    BUFFET = 'Buffet',
}

export enum RestaurantMeal {
    BREAKFAST = 'Breakfast',
    BRUNCH = 'Brunch',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
}

export enum RestaurantDietaryRestriction {
    VEGETARIAN = 'Vegetarian',
    VEGAN = 'Vegan',
    GLUTENFREE = 'Gluten-Free',
    KOSHER = 'Kosher'
}

export enum RestaurantCuisine {
    TURKISH = 'Turkish',
    KOREAN = 'Korean',
    CHINESE = 'Chinese',
    EASTERN = 'Eastern',
    EUROPEAN = 'European',
    CARIBBEAN = 'Caribbean',
    THAI = 'Thai',
    INDIAN = 'Indian',
    JAPANESE = 'Japanese',
    GEORGIAN = 'Georgian',
    AMERICAN = 'American'
}

export enum RestaurantPayment {
    CASH = 'Cash',
    CREDITCARD = 'Credit Card',
    TRANSFER = 'Transfer',
    QR = 'QR',
    MOBILE = 'Mobile',
}

export enum RestaurantStatus {
    HALAL = 'Halal',
    JAIZ = 'Jaiz',
    MUSHBOOH = 'Mushbooh',
    HARAM = 'Haram',
}

@Entity({ name: 'restaurants' })
export class RestaurantEntity extends BaseEntity {
    @OneToOne(() => InfoEntity)
    @JoinColumn({ name: 'info_id' })
    info: InfoEntity;

    @Column({
        name: 'open_time'
    })
    openTime: string;

    @Column({
        name: 'average_check'
    })
    averageCheck: number;

    @Column({
        type: 'enum',
        enum: RestaurantType
    })
    type: RestaurantType;

    @Column({
        type: 'enum',
        array: true,
        enum: RestaurantMeal,
        nullable: true
    })
    meals: RestaurantMeal[];

    @Column({
        type: 'enum',
        array: true,
        enum: RestaurantCuisine
    })
    cuisines: RestaurantCuisine[];

    @Column({
        name: 'dietary_restrictions',
        type: 'enum',
        array: true,
        enum: RestaurantDietaryRestriction,
        nullable: true
    })
    dietaryRestrictions: RestaurantDietaryRestriction[]

    @Column({
        nullable: true
    })
    reservation: string;

    @Column({
        nullable: true
    })
    delivery: string;

    @Column({
        type: 'enum',
        array: true,
        enum: RestaurantPayment
    })
    payment: RestaurantPayment[];

    @Column({
        name: 'has_wifi'
    })
    hasWifi: boolean;

    @Column({
        name: 'has_parking'
    })
    hasParking: boolean;

    @OneToOne(() => PrayerRoomEntity)
    @JoinColumn({ 
        name: 'prayer_room_id'
    })
    prayerRoom: PrayerRoomEntity;

    @Column({
        type: 'enum',
        enum: RestaurantStatus
    })
    status: RestaurantStatus;

    @Column({
        name: 'status_reason',
        type: 'text'
    })
    statusReason: string;

    @Column()
    website: string;
}
