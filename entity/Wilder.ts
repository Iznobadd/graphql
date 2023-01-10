import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";
import Note from "./Note";

@ObjectType()
@Entity({ name: "wilders" })
export default class Wilder {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  age: number;

  @OneToMany(() => Note, (note) => note.wilder)
  @Field(() => [Note])
  notes: Note[];
}

@InputType()
export class CreateWilderInput implements Partial<Wilder> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;
}
