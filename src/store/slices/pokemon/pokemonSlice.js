import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	page: 0,
	pokemons: [],
	isLoading: false,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		startLoadingPokemon: (state) => {
			state.isLoading = true;
		},
		setPokemons: (state, action) => {
			console.log(action);
		},
	},
});

export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
