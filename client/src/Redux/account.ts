import { createSlice } from '@reduxjs/toolkit';

interface Account {
    username: string;
    password: string;
}

interface AccountState {
    account: Account
}

const initialState: AccountState = {
    account: {
        username: '',
        password: '',
    }
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.account.username = action.payload;
        },
        setPassword: (state, action) => {
            state.account.password = action.payload;
        },
        logout: state => {
            state.account.password = '';
            state.account.password = '';
        }
    }
}) 

export const { setUsername, setPassword, logout } = accountSlice.actions;
export default accountSlice.reducer;