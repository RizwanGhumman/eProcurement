import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Department } from '../../department/entity/department.entity';
import { UserStatus } from '../enum/user-status-enum';
import { UserRole } from '../enum/user-role.entity';

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable:false,
    unique:true
  })
  emp_no: number;

  @Column({nullable:false})
  first_name: string;

  @Column({
    nullable:false
  })
  last_name: string;

  @Column({
    unique:true,
    nullable:false
  })
  email: string;

  @Column({
    nullable:true
  })
  password: string;

  @Column({
    default:UserStatus.IN_ACTIVE
  })
  status: string;

  @Column({
    nullable:false
  })
  phone:string;

  @Column()
  role:string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(()=>Department,department=>department.users)
  department:Department

  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 8);
  // }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

