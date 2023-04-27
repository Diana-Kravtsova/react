import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import pokemonReducer from './pokemonSlice';
import authReducer from './authenticationSlice';

const [
    authPersistor,
    pokemonPersistor,
] = [
    { key: 'auth', storage, blacklist: [] },
    { key: 'pokemon', storage, whitelist: ['info'] },
];

function logger() {
    return next => action => {
        console.log('Will dispatch:', action.type, action.payload);
        return next(action);
    };
}

export const store = configureStore({
    reducer: combineReducers({
        auth: persistReducer(authPersistor, authReducer),
        pokemon: persistReducer(pokemonPersistor, pokemonReducer),
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
});

export const persistor = persistStore(store);
