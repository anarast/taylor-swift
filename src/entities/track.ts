import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tracks" })
export class Track {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  lyrics!: string;

  @Column()
  length?: number;

  @Column()
  album_id!: number;
}
