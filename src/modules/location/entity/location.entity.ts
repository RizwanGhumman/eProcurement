import { Department } from "src/modules/department/entity/department.entity";
import { Vendor } from "src/modules/vendor/entity/vendor.entity";
import { BaseEntity, Column,CreateDateColumn,Entity,OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('locations')
export class Location extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=>Department,department=>department.location)
    departments:Department[]

    @OneToOne(()=>Vendor,vendor=>vendor.location)
    vendor:Vendor
    
}