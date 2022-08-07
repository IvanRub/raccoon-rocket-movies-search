import { IMoviesRequestParams } from './../../helpers/api/interfaces/movieRequestParams';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from './../../helpers/api/interfaces/movie';

export interface ISearchState {
    searchValue: string;
    result: null | IMovie[];
    page: number;
    loading: boolean;
    error: boolean;
    showMore: boolean;
}

const initialState: ISearchState = {
    searchValue: '',
    result: null,
    page: 1,
    loading: false,
    error: false,
    showMore: false,
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTitle: (state, action: PayloadAction<string>) => ({
            ...state,
            searchValue: action.payload,
            result: null,
            page: 1,
            loading: false,
            error: false,
            showMore: false,
        }),
        setShowMore: (state, action: PayloadAction<boolean>) => ({
            ...state,
            showMore: action.payload,
        }),
        setPage: (state, action: PayloadAction<number>) => ({
            ...state,
            page: action.payload,
        }),
        get: (state, action: PayloadAction<IMoviesRequestParams>) => ({...state, loading: true, error: false}),
        success: (state, action: PayloadAction<IMovie[]>) => ({
            ...state,
            result: action.payload,
            loading: false,
            error: false,
        }),
        error: (state) => ({
            ...state,
            result: null,
            loading: false,
            error: true,
        }),
        reset: (state) => ({
            ...state,
            searchValue: '',
            result: null,
            page: 1,
            loading: false,
            error: false,
            showMore: false,
        }),
    },
});

export const searchActions = SearchSlice.actions;
export const searchReducer = SearchSlice.reducer;
