import graphql from 'graphql';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {

    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        
    }
})

export default new GraphQLSchema({query: RootQuery, mutation: Mutation});