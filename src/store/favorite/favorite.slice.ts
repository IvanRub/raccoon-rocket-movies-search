import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IMovie } from './../../helpers/api/interfaces/movie';

export interface IFavoriteState {
    loading: boolean,
    error: boolean,
}

const initialState: IFavoriteState = {
    error: false,
    loading: false,
};

/* Добавление в избранное */
export const addFavorite = createAction<IMovie>('favorite/add');
/* Удаление из избранного */
export const removeFavorite = createAction<IMovie>('favorite/remove');

const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        loading: (state, action: PayloadAction<boolean>) => ({
            ...state,
            loading: action.payload,
            error: false,
        }),
        error: (state) => ({
            ...state,
            error: true,
            loading: false,
        }),
    },
});


export const favoriteActions = FavoriteSlice.actions;
export const favoriteReducer = FavoriteSlice.reducer;