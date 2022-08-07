import React from 'react';
import { useDispatch } from 'react-redux';

import {
    addFavorite,
    removeFavorite,
 } from '../../store/favorite'

import { IMovie } from './../../helpers/api'

import ImageDefault from './../../assets/Image.svg'
import Star from './../../assets/Icon-Wrapper.svg'
import StarCheck from './../../assets/Icon-Wrapper-check.svg'

import styles from './SearchItem.module.scss';
import Button from "../Button";

type TMovieItem = IMovie & { favorite: boolean };

/**
 * Компонент Карточка элемент результатта поиска
 * @param props 
 * @class
 */
function SearchItem(props: TMovieItem) {
    const { name, description, rating, year, poster, favorite = false } = props;

    const dispatch = useDispatch();

    /* Добавление/удаление элемента из избранного */
    function handleToggleBookmark(isAddToFavorite = false) {
        if (isAddToFavorite) {
            dispatch(addFavorite(props));
        } else {
            dispatch(removeFavorite(props));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={poster?.previewUrl || ImageDefault} alt='' width={112} height={112} />
                <div className={styles.favoriteButton}>
                    <Button onClick={() => handleToggleBookmark(!favorite)}>
                        <img src={!!favorite ? StarCheck : Star} alt='' />
                    </Button>
                </div>
            </div>
            <div className={styles.info}>
                <div className='h5-medium'>{name}</div>
                {!!description && (<div className={styles.description}>{description}</div>)}
                <div className={styles.marks}>
                    {!!year && (<div>Год: {year}</div>)}
                    {!!rating?.kp && (<div>КП: {rating.kp}</div>)}
                    {!!rating?.imdb && (<div>IMDB: {rating.imdb}</div>)}
                </div>
            </div>
        </div>
    )
}

export default SearchItem;
