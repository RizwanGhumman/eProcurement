import { Location } from "src/modules/location/entity/location.entity";
import { BaseEntity, Column, CreateDateColumn, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
@Entity('departments')
export class Department extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  

  @Column()
  type: string

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(()=>User, user=>user.department)
  users:User[]

  @ManyToOne(()=>Location,location=>location.departments)
  location:Location
}