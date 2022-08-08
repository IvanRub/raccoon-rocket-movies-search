import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import {
    favoriteErrorSelector,
    favoriteLoadingSelector,
    selectFavoritesList,
} from '../../store/favorite'

import SearchItem from "../../components/SearchItem";
import ErrorBlock from "../../components/ErrorBlock";
import LoadingBlock from "../../components/SceletonBlock";
import ImageNotFound from "../../assets/image-4.svg";

import styles from './Favorites.module.scss';

/**
 * Компонент Страница Избранное
 * @class 
 */
export const Favorites: React.FC = () => {
    const error = useSelector(favoriteErrorSelector, shallowEqual);
    const loading = useSelector(favoriteLoadingSelector, shallowEqual);
    const bookmarks = useSelector(selectFavoritesList, shallowEqual);

    if (!bookmarks) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            {loading && <LoadingBlock />}

            {!loading && !error && !bookmarks.length && (
                <div className={styles.notResult}>
                    <div className='h3-regular'>Тут ничего нет</div>
                    <img src={ImageNotFound} alt='' />
                </div>
            )}

            {!loading && !error && !!bookmarks.length && (
                <div className={styles.list}>
                    {bookmarks.map((bookmark, index) => (
                        <SearchItem key={`${bookmark.id}${index}`} {...bookmark} />
                    ))}
                </div>
            )}

            {error && <ErrorBlock />}
        </div>
    )
}
