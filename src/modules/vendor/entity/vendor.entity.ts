import { Bidding } from "src/modules/bidding/entity/bidding.entity";
import { Location } from "src/modules/location/entity/location.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, LoadEvent, OneToMany,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
@Entity('vendors')
export class Vendor extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;  

  @Column()
  shipping_address: string;

  @Column()
  first_contact: string; 

  @Column()
  second_contact: string;

  @Column()
  type: string;

  @Column()
  category: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(()=>Bidding, bid=>bid.vendor)
  bids:Bidding[]

  @OneToOne(()=>Location,location=>location.vendor)
  @JoinColumn()
  location:Location

}