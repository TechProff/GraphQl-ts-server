import {
    resolverMap
} from "../../types/graphql-utils";
 
export const resolvers: resolverMap = {
    Query: {
        hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello from ${name} || world`
    },
}