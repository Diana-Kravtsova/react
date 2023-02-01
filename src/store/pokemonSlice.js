import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getPokemon } from '../services/PokemonService';

const initialState = {
    status: 'idle',
    info: [],
    readonly: false,
    error: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        handleEdit: (state, action) => {
            state.info = state.info.map(value => value.id === action.payload.id ? action.payload : value);
        },
        handleAdd: (state) => {
            state.info = [...state.info, { id: uuidv4(), caption: '', text: '', checked: false }];
        },
        handleDelete: (state) => {
            state.info = state.info.filter(({ checked }) => !checked);
        },
        handleReadonly: (state) => {
            state.readonly = !state.readonly;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectPokemonCount = state => state.pokemon.info.length;

export const selectPokemon = (pokemonId) => {
    return (state) => state.pokemon.info.find(({ id }) => id === pokemonId);
};

export const fetchPokemon = createAsyncThunk('info/fetchPokemon', async () => {
    const response = await getPokemon();
    return response.map(data => ({
        id: uuidv4(),
        caption: data['Name'],
        text: data['About'],
        checked: false,
    }));
});

export const {
    handleEdit,
    handleAdd,
    handleDelete,
    handleReadonly,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
