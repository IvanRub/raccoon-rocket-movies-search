import type { IMovie } from './movie';

export interface IMoviesResponse {
    docs: IMovie[],
    total: number,
    limit: number,
    page: number,
    pages: number,
}
