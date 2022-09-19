import { GraphQLObjectType, GraphQLString } from "graphql";

const JournalEntry = new GraphQLObjectType({
  name: "journal_entry",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    text: { type: GraphQLString },
    published_date: { type: GraphQLString },
    mood: { type: GraphQLString },
    user: {
      type: GraphQLString,
      resolve: (parent: any) => {
        return "User Info Here";
      },
    },
  }),
});

export default JournalEntry;
