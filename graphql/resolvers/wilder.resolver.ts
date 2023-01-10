import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Wilder, { CreateWilderInput } from "../../entity/Wilder";
import WilderService from "../../service/wilder.service";

export default class WilderResolver {
  @Query(() => [Wilder])
  async listWilders(): Promise<Wilder[]> {
    let wilders = await new WilderService().listWilders();
    return wilders;
  }

  @Mutation(() => Wilder)
  async addWilder(
    @Arg("createWilderInput") createWilderInput: CreateWilderInput
  ): Promise<Wilder> {
    let wilder = await new WilderService().createWilder({
      ...createWilderInput,
    });
    return wilder;
  }
}
