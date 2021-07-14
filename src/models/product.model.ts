import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  reference: number;
  @Column()
  customer: string;
  @Column()
  company: string;
  @Column()
  designer: string;
  @Column()
  img_url: string;
  @Column()
  description: string;
  @Column()
  amount: number;
  @Column()
  grading: string;
  @Column()
  brand: string;
  @Column()
  wash_type: string;
  @Column()
  threads_info: string;
  @Column()
  zipper_info: string;
  @Column()
  status: string;
  @Column()
  piece_price: number;
  @Column()
  observation_info: string;
  @CreateDateColumn({ type: 'timestamp' })
  create_at: Date;
}
