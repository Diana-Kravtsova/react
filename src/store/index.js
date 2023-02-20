import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './pokemonSlice';

function logger() {
    return next => action => {
        console.log('Will dispatch:', action.type, action.payload);
        return next(action);
    };
}

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
});
