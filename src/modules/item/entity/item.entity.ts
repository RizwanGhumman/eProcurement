import { PurchaseRequestItem } from "src/modules/purchase-request-item/entity/purchase-request-item.entity";
import { BaseEntity, Column,CreateDateColumn,Entity,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('items')
export class Item extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    detail: string;

    @Column()
    UOM: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>PurchaseRequestItem,pr_req_item=>pr_req_item.item)
    purchase_req_items:PurchaseRequestItem[]
}