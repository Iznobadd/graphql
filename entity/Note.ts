import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Language from "./Language";
import Wilder from "./Wilder";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity({ name: "notes" })
export default class Note {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  note: number;

  @Field()
  @ManyToOne(() => Language, { eager: true, onDelete: "CASCADE" })
  language: Language;

  @Field(() => [Wilder])
  @ManyToOne(() => Wilder, (wilder) => wilder.notes, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  wilder: Wilder;
}
