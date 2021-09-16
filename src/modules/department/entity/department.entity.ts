import { Location } from "src/modules/location/entity/location.entity";
import { BaseEntity, Column, CreateDateColumn, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
@Entity('departments')
@Unique(['name','locationId'])
export class Department extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  

  @Column()
  type: string

  @Column()
  locationId: number

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(()=>User, user=>user.department,{
    lazy:true
  })
  users:User[]

  @ManyToOne(()=>Location,location=>location.departments,{
    lazy:true
  })
  location:Location
}