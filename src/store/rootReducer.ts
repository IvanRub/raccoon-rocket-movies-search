import {combineReducers} from '@reduxjs/toolkit';

import {searchReducer} from './search';
import {favoriteReducer} from './favorite';

export const rootReducer = combineReducers({
    search: searchReducer,
    favorite: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
