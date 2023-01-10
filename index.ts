import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { WilderResolver } from "./graphql/resolvers";
import datasource from "./lib/datasource";
import { buildSchema } from "type-graphql";

const start = async (): Promise<void> => {
  const schema = await buildSchema({ resolvers: [WilderResolver] });
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen().then(async (data) => {
    await datasource.initialize();
    console.log(`Serveur lancé sur l'url ${data.url}`);
  });
};

start();
