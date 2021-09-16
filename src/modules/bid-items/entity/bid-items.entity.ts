import { Bidding } from "src/modules/bidding/entity/bidding.entity";
import { PurchaseRequestItem } from "src/modules/purchase-request-item/entity/purchase-request-item.entity";

import { BaseEntity, Column,CreateDateColumn,Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('bid_items')
export class BidItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit_price: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(()=>PurchaseRequestItem,pr_request_item=>pr_request_item.bid_item)
    purchase_req_item:PurchaseRequestItem

    @OneToMany(()=>Bidding,bid=>bid.purchase_req)
    bids:Bidding[]

  
}