import { HttpTransport } from './../http-transport';

import type { IMoviesRequestParams, IMoviesResponse } from './../interfaces';
import * as url from './../url';

/**
 * Запросы для поиска фильмов
 */
export const movies = {
    get: async (params: IMoviesRequestParams) => {
        return await HttpTransport<IMoviesResponse>({
            method: 'GET',
            url: url.GET_MOVIES,
            params: {
                ...params,
                field: 'name',
                isStrict: false,
                limit: 10,
            },
        });
    }
};
