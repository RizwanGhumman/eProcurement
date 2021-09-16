import { BidItem } from "src/modules/bid-items/entity/bid-items.entity";
import { Bidding } from "src/modules/bidding/entity/bidding.entity";
import { Item } from "src/modules/item/entity/item.entity";
import { PurchaseRequestItem } from "src/modules/purchase-request-item/entity/purchase-request-item.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('purcahse_request')
export class PurchaseRequest extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    urgency: string;

    @Column()
    status: string;

    @Column()
    detail: string;

    @Column()
    require_date: Date;

    @Column()
    created_by: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>PurchaseRequestItem,pr_req_item=>pr_req_item.purchase_req)
    purchase_req_items:PurchaseRequestItem[]


    @OneToMany(()=>Bidding,bids=>bids.purchase_req)
    bids:Bidding



    

}