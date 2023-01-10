import { mergeResolvers } from "@graphql-tools/merge";
import wilderResolver from "./wilder.resolver";

export default mergeResolvers([wilderResolver]);
