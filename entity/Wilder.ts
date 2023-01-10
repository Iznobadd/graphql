import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Note from "./Note";

@Entity({ name: "wilders" })
export default class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Note, (note) => note.wilder)
  notes: Note[];
}
