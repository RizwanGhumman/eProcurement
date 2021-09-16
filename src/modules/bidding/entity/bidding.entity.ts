import { BidItem } from "src/modules/bid-items/entity/bid-items.entity";
import { PurchaseRequest } from "src/modules/purchase-request/entity/purchase-request.entity";
import { Vendor } from "src/modules/vendor/entity/vendor.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('biddings')
export class Bidding extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    shipping_date:Date;

    @Column()
    discount:number;

    @Column()
    detail:string;

    @Column()
    advance_payment:number; 

    @Column()
    status: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;


    @ManyToOne(()=>Vendor,vendor=>vendor.bids)
    vendor:Vendor

    @ManyToOne(()=>BidItem,bid_item=>bid_item.bids)
    bid_item:BidItem


    @ManyToOne(()=>PurchaseRequest,pr_req=>pr_req.bids)
    purchase_req:PurchaseRequest

}