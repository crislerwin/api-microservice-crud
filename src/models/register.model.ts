import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "register" })
export class Register {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column()
  phone_number: string;
  @Column()
  first_adress: string;
  @Column()
  second_adress: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip_code: string;
  @Column()
  language: string;
  @Column()
  country: string;
  @Column()
  billing_city: string;
  @Column()
  billing_state: string;
  @Column()
  billing_zip_code: string;
  @Column()
  primary_billing_adress: string;
  @Column()
  second_billing_adress: string;
  @Column()
  fcut_device: boolean;
  @Column()
  other_installed_trackers: boolean;
  @Column()
  identify_fleet_drivers: boolean;
  @Column()
  same_shipping_adress: boolean;
  @Column()
  tracker_quantity: number;
  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
}
