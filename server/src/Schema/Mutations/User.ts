import MessageType from '../TypeDefs/Messages';
import { GraphQLString } from 'graphql';
import { Users } from '../../Entities/Users';

export const CREATE_USER = {
    type: MessageType,
    args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { firstName, lastName, username, password } = args;
        // Checks if username is taken
        const userExists = await Users.findOne({username: username});
        if (!userExists) {
            Users.insert({ firstName, lastName, username, password });
            return { successful: true, message: "USER CREATED!" };
        }
        throw new Error("USERNAME IS TAKEN!");
    }
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, password } = args;
        // Find User
        const userToDelete = await Users.findOne({ username: username, password: password });
        if (userToDelete) {
            Users.delete({ username: username });
            return { successful: true, message: "USER DELETED!" };
        }
        throw new Error("USER WAS NOT DELETED!");
    }
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        // Finds User
        const userToUpdate = await Users.findOne({ username: username });
        // If User Doesn't Exist
        if (!userToUpdate) {
            throw new Error("USER DOES NOT EXIST!")
        }
        // Optional Chaining for Password (we don't know if it exists yet)
        const userPassword = userToUpdate?.password;
        // Update Password if Match
        if (userPassword === oldPassword) {
            await Users.update({ username: username }, { password: newPassword });
            return { successful: true, message: "PASSWORD UPDATED!" };
        } else {
            // Error for no match
            throw new Error("PASSWORD DOES NOT MATCH");
        }
    }
};

export const UPDATE_USERNAME = {
    type: MessageType,
    args: {
        oldUsername: { type: GraphQLString },
        newUsername: { type: GraphQLString },
        password: {type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { oldUsername, newUsername, password } = args;
        let usernameToUpdate = await Users.findOne({ username: oldUsername });
        if (!usernameToUpdate) {
            throw new Error("INCORRECT USERNAME");
        }
        const usernameToUpdatePassword = usernameToUpdate?.password;
        if (usernameToUpdatePassword !== password) {
            throw new Error("INCORRECT PASSWORD");
        } else {
            await Users.update({ username: oldUsername, password: password }, { username: newUsername });
            return { successful: true, message: "USERNAME UPDATED" };
        }
    }
};