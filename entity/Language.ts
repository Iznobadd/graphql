import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Unique("contrainte_unique", ["label"])
@Entity({ name: "languages" })
export default class Language {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;
}
