import { GraphQLString, GraphQLList } from "graphql";
import JournalEntry from "./schema";
import entries from "./data";
import IJournalEntry from "./journal-entry";

const JournalEntriesQuery = {
  type: GraphQLList(JournalEntry),
  args: {
    user_id: { type: GraphQLString },
  },
  resolve: async (parent: any, args: any) => {
    const entryArr = entries.filter(
      (entry: IJournalEntry) => entry.user_id === args.user_id
    );
    return entryArr;
  },
};

export default JournalEntriesQuery;
