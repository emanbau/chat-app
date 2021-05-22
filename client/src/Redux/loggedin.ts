import { createSlice } from '@reduxjs/toolkit';

interface LoggedinState {
    loggedin: boolean;
}

const initialState: LoggedinState = {
    loggedin: false
}

export const loggedinSlice = createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        login: state => {
            state.loggedin = true;
        },
        logout: state => {
            state.loggedin = false;
        }
    }
}) 

export const { login, logout } = loggedinSlice.actions;
export default loggedinSlice.reducer;
