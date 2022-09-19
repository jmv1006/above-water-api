"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const query_1 = __importDefault(require("./models/journal-entries/query"));
const RootQueryType = new graphql_1.GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        hello: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return "Hello world";
            },
        },
        journal_entries: query_1.default,
    }),
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQueryType,
});
const app = (0, express_1.default)();
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)((req, res) => {
    return {
        schema,
        graphiql: true,
    };
}));
const port = 3000;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
