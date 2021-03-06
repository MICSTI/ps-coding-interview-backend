import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('robot')
export class Robot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  powermove: string;

  @Column()
  experience: number;

  @Column()
  outOfOrder: boolean;

  @Column()
  avatar: string;
}
