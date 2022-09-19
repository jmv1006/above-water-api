"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema_1 = __importDefault(require("./schema"));
const data_1 = __importDefault(require("./data"));
const JournalEntriesQuery = {
    type: (0, graphql_1.GraphQLList)(schema_1.default),
    args: {
        user_id: { type: graphql_1.GraphQLString },
    },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        const entryArr = data_1.default.filter((entry) => entry.user_id === args.user_id);
        return entryArr;
    }),
};
exports.default = JournalEntriesQuery;
