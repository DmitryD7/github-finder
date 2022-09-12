import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'gfk';

interface GithubState {
    favourites: string[],
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addToFavourites(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFromFavourites(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
    },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;