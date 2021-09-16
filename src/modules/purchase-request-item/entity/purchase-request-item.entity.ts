import { BidItem } from "src/modules/bid-items/entity/bid-items.entity";
import { Item } from "src/modules/item/entity/item.entity";
import { PurchaseRequest } from "src/modules/purchase-request/entity/purchase-request.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('purcahse_request')
export class PurchaseRequestItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    manufacture: string;

    @Column()
    quantity: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(()=>BidItem,bid_item=>bid_item.purchase_req_item)
    @JoinColumn()
    bid_item:BidItem

    @ManyToOne(()=>Item,item=>item.purchase_req_items)
    item:Item

    @ManyToOne(()=>PurchaseRequest,pr_req=>pr_req.purchase_req_items)
    purchase_req:PurchaseRequest

} 