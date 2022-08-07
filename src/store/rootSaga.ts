import {all} from 'redux-saga/effects';

import initSearchSaga from './search/search.saga';
import initFavoriteSaga from './favorite/favorite.saga';

export default function* rootSaga() {
    yield all([
        initSearchSaga(),
        initFavoriteSaga(),
    ]);
}
