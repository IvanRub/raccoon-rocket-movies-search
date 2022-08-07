import {RootState} from "../rootReducer";
import {favoriteListSelector} from "../favorite";
import {createSelector} from "reselect";

/* Селектор строки поиска */
export const searchTitleSelector = (state: RootState) =>
    state.search.searchValue;

/* Селектор флага загрузки */
export const searchLoadingSelector = (state: RootState) =>
    state.search.loading;

/* Селектор флага ошибки */
export const searchErrorSelector = (state: RootState) =>
    state.search.error;

/* Селектор флага доступа загрузки дополнительного списка фильмов */
export const searchShowMoreSelector = (state: RootState) =>
    state.search.showMore;

/* Селектор текущей страницы */
export const searchPageSelector = (state: RootState) =>
    state.search.page;

/* Селектор списка фильмов */
export const selectMoviesList = createSelector(
    (state: RootState) => state.search.result,
    (state: RootState) => favoriteListSelector(state),
    (result, favorites) => {
        const favoriteSet = new Set(favorites.map((item) => item.id));

        return result?.map((movie) => ({
                ...movie,
                favorite: favoriteSet.has(movie.id),
        }
    ));
    }
);