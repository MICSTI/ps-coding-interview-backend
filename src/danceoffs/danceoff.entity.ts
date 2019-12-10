import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('danceoff')
export class Danceoff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winner: number;

  @Column()
  loser: number;

  @Column()
  dancedAt: Date;
}
