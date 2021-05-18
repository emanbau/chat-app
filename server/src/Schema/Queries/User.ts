import UserType from '../TypeDefs/User';
import { GraphQLList, GraphQLString } from 'graphql';
import { Users } from '../../Entities/Users';
import { resolve } from 'path/posix';

interface Args {
    username: string;
    password: string;
}

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

const GET_USER = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },

    },
    async resolve(parent: any, args: Args) {
        const {username, password} = args;
        const user = Users.findOne({username: username, password: password});
        if (!user) {
            throw new Error("INCORRECT USERNAME OR PASSWORD");
        }
        return user
    }
}