import { call, all, put, takeLatest, select } from 'redux-saga/effects';

import {searchActions} from './search.slice';
import {RootState} from "../rootReducer";
import { IMovie, IMoviesResponse, movies } from './../../helpers/api';

/* Обработка запроса получения списка фильмом */
function* GetSearchResultSaga({ payload }: ReturnType<typeof searchActions['get']>) {
    try {
        const list: IMovie[] = yield select((store: RootState) => store.search.result);

        const result: IMoviesResponse = yield call(
          movies.get,
          payload
        );

        const searchList = [...(payload.page === 1 ? [] : (list || [])), ...result.docs];

        yield put(searchActions.success(searchList));

        yield all([
            put(searchActions.setPage(result.page)),
            put(searchActions.setShowMore(result.page < result.pages)),
        ]);
    } catch (e) {
        yield put(searchActions.error());
    }
}

function* initSearchSaga() {
    yield takeLatest(searchActions.get, GetSearchResultSaga);
}

export default initSearchSaga;