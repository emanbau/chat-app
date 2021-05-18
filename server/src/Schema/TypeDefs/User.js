import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

export default UserType;