import { IMovie } from './../../helpers/api/interfaces/movie';
import {call, put, takeLatest} from 'redux-saga/effects';

import {favoriteActions, addFavorite, removeFavorite} from './favorite.slice';
import {loadState, saveState} from '../../helpers/local-storage';

/* Обработка добавления элемента в список избранных фильмов */
function* AddToFavoriteSaga({payload}: ReturnType<typeof addFavorite>) {
    try {
        yield put(favoriteActions.loading(true));

        let favoritesList: IMovie[] = yield call(loadState, 'favorites');

        if (!favoritesList) {
            favoritesList = [];
        }

        favoritesList.push(payload);

        yield call(saveState, 'favorites', favoritesList);

        yield put(favoriteActions.loading(false));
    } catch (e) {
        yield put(favoriteActions.error());
    }
}

/* Обработка удаления элемента из списка избранных фильмов */
function* RemoveFromFavoriteSaga({payload}: ReturnType<typeof removeFavorite>) {
    try {
        yield put(favoriteActions.loading(true));

        let favoritesList: IMovie[] = yield call(loadState, 'favorites');

        if (!!favoritesList) {
            yield call(saveState, 'favorites', favoritesList.filter(({ id }) => id !== payload.id));
        }

        yield put(favoriteActions.loading(false));
    } catch (e) {
        yield put(favoriteActions.error());
    }
}

function* initSearchSaga() {
    yield takeLatest(addFavorite, AddToFavoriteSaga);
    yield takeLatest(removeFavorite, RemoveFromFavoriteSaga);
}

export default initSearchSaga;