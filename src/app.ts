import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import JournalEntriesQuery from "./models/journal-entries/query";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => {
        return "Hello world";
      },
    },
    journal_entries: JournalEntriesQuery,
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP((req, res) => {
    return {
      schema,
      graphiql: true,
    };
  })
);

const port = 3000;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
