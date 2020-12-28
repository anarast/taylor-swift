import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "albums" })
export class Album {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  release_date!: string;

  @Column()
  label!: string;
}
