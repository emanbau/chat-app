import { configureStore } from '@reduxjs/toolkit';
import loggedin from './loggedin';
import account from './account';

export const store = configureStore({
    reducer: {
        loggedin: loggedin,
        account: account,
    }
})

// export type of state from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;