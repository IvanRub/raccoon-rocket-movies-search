import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {useNavigate} from "react-router-dom";

import {
    searchActions,
    searchTitleSelector,
    searchErrorSelector,
    searchLoadingSelector,
    selectMoviesList,
    searchShowMoreSelector,
    searchPageSelector,
} from '../../store/search'

import TextInput from '../../components/TextInput';
import SearchItem from '../../components/SearchItem';
import LoadingBlock from '../../components/SceletonBlock';
import Button from "../../components/Button";
import ErrorBlock from "../../components/ErrorBlock";

import ImageNotFound from './../../assets/image-2.svg';

import styles from './SearchList.module.scss';

/**
 * Компонент Страница отображения результатов поиска 
 * @class
 */
export const SearchList: React.FC = () => {
    const dispatch = useDispatch();

    const error = useSelector(searchErrorSelector);
    const loading = useSelector(searchLoadingSelector);
    const showMore = useSelector(searchShowMoreSelector);
    const page = useSelector(searchPageSelector);

    const searchTitle = useSelector(searchTitleSelector, shallowEqual);
    const movies = useSelector(selectMoviesList, shallowEqual);

    const [search, setSearch] = useState(searchTitle);

    /* Обработка повторного монтирования компонента */
    const shouldFetchRef = useRef<boolean>(true);
    /* Таймер */
    const timerRef = useRef<null | NodeJS.Timeout>(null);

    let navigate = useNavigate();

    /* Обработка после монтирования компонента  */
    useEffect(() => {
        if (shouldFetchRef.current) {
            shouldFetchRef.current = false;

            if (!searchTitle.length) {
                navigate('/');
            } else {
                handleFetchMoreMovies(searchTitle, 1);
            }
        }
    }, []);

    /* Отправка запроса поиска */
    function handleFetchMoreMovies(searchValue: string, pageValue: number) {
        dispatch(
            searchActions.get({
                search: searchValue,
                page: pageValue,
            })
        );
    }

    /* Обработка изменения значения строки поиска в текстовом поле формы  */
    function handleFetchSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const textSearch  = event.target.value;
        setSearch(textSearch);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current  = setTimeout(() => {
            if (textSearch.length > 3) {
                handleFetchMoreMovies(textSearch, 1);
            } else if (!textSearch.length) {
                dispatch(searchActions.reset());
                navigate('/');
            }
        }, 500);
    }

    if (!movies) {
        if (loading) {
            return <LoadingBlock />;
        }

        if (error) {
            return <ErrorBlock />;
        }

        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <TextInput
                    placeholder='Введите что-нибудь для поиска фильмов'
                    value={search}
                    onChange={handleFetchSearch}
                />
            </div>

            <div className={styles.container}>
                {!loading && !error && !movies.length && (
                    <div className={styles.notResult}>
                        <div className='h3-regular'>Мы ничего не нашли, попробуйте ввести другой запрос</div>
                        <img src={ImageNotFound} alt=''/>
                    </div>
                )}

                {!error && !!movies.length && (
                    <div className={styles.list}>
                        {movies.map((movie, index) => (
                            <SearchItem key={movie.id + index} {...movie} />
                        ))}
                    </div>
                )}

                {loading && <LoadingBlock/>}

                {error && <ErrorBlock/>}

                {!loading && !error && !!movies.length && showMore && (
                    <div>
                        <Button onClick={() => handleFetchMoreMovies(search, +page + 1)}>Больше</Button>
                    </div>
                )}
            </div>
        </div>
    )
}