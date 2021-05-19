import UserType from '../TypeDefs/User';
import { GraphQLList, GraphQLString } from 'graphql';
import { Users } from '../../Entities/Users';


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const GET_USER = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },

    },
    async resolve(parent: any, args: any) {
        const {username, password} = args;
        const user = Users.findOne({username: username, password: password});
        if (!user) {
            throw new Error("INCORRECT USERNAME OR PASSWORD");
        }
        return user
    }
}
