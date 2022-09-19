"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const JournalEntry = new graphql_1.GraphQLObjectType({
    name: "journal_entry",
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLString },
        text: { type: graphql_1.GraphQLString },
        published_date: { type: graphql_1.GraphQLString },
        mood: { type: graphql_1.GraphQLString },
        user: {
            type: graphql_1.GraphQLString,
            resolve: (parent) => {
                return "User Info Here";
            },
        },
    }),
});
exports.default = JournalEntry;
