import {RootState} from '../rootReducer';
import { createSelector } from 'reselect'

import {loadState} from '../../helpers/local-storage';
import { IMovie } from './../../helpers/api/interfaces/movie';

/* Получения списка фильмов в избранном */
export const favoriteListSelector = (state: RootState) => {
    let favoritesList = loadState<IMovie[]>('favorites');

    if (!!favoritesList) {
        return favoritesList;
    }

    return [];
}

/* Селектор количества фильмов в избранном */
export const selectFavoritesCount = createSelector(
    favoriteListSelector,
    (data) => data.length
);

/* Селектор флага загрузки */
export const favoriteLoadingSelector = (state: RootState) =>
    state.favorite.loading;

/* Селектор флага ошибки */
export const favoriteErrorSelector = (state: RootState) =>
    state.favorite.error;

/* Селектор списка избранных фильмов */
export const selectFavoritesList = createSelector(
    favoriteListSelector,
    (data) => data.map((item) => ({ ...item, favorite: true }))
);