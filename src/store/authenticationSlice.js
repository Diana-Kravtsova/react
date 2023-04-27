import { createSlice } from '@reduxjs/toolkit';

const admin = {
    email: 'testAdmin@gmail.com',
    password: '12345yuiopp',
};

const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        password: null,
        type: null,
    },
    reducers: {
        signIn: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;

            if (state.email === admin.email && state.password === admin.password) {
                state.type = 'admin';
            } else {
                state.type = 'user';
            }
        },
        signOut: (state) => {
            state.email = null;
            state.password = null;
            state.type = null;
        },
    },
});

export const { signIn, signOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
