import { Restaurant } from 'src/restaurants/entity/restaurant.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 6,
  })
  password: string;

  @Column({
    name: 'is_active',
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'is_notify',
    default: true,
  })
  isNotify: boolean;

  @Column({
    name: 'coin',
    type: 'integer',
  })
  coin: number;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 12,
  })
  phone: string;

  @OneToMany(
    () => Restaurant,
    restaurant => restaurant.user,
  )
  restaurants: Restaurant[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;
}
