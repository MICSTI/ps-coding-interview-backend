import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('danceoff')
export class DanceoffEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winner: number;

  @Column()
  loser: number;

  @Column()
  dancedAt: Date;
}
