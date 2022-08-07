import React from 'react';
import { matchPath, useLocation, Link } from "react-router-dom";
import { shallowEqual, useSelector } from 'react-redux';

import { selectFavoritesCount } from '../../store/favorite'
import Button from './../Button'
import Star from './../../assets/Icon-Wrapper-check.svg'
import Search from './../../assets/Icon-Search.svg'

import styles from './AppBar.module.scss';

/**
 * Компонент Верхняя панель управления
 * @class
 */
export default function AppBar() {
    const { pathname } = useLocation();
    
    const isMatchFavoritesPage = matchPath('favorites', pathname);
    const isMatchHomePage = matchPath('/', pathname);

    const countFavorites = useSelector(selectFavoritesCount, shallowEqual);

    return (
        <div className={styles.appbar}>
            <div>
                {!isMatchHomePage && (<div className='h1-medium'>ЕнотоКиноПоиск</div>)} 
            </div>
            
            {!isMatchFavoritesPage ? (
                <Link to='/favorites'>
                    <Button>
                        <img src={Star} alt='Избранное' />
                        Избранное ({countFavorites})
                    </Button>
                </Link>
            ) : (
                <Link to='/'>
                    <Button>
                        <img src={Search} alt='Поиск' />
                        Поиск
                    </Button>
                </Link>
            )}
        </div>
    )
}