import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  releaseDate!: string;

  @Column()
  label!: string;
}
