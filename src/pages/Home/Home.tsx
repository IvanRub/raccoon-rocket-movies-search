import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { searchActions } from '../../store/search'

import TextInput from '../../components/TextInput';
import RaccoonHome from './../../assets/image-1.svg';

import styles from './Home.module.scss';

/**
 * Компонент Главная страница поиска
 * @class
 */
export const Home: React.FC = () => {
    const [search, setSearch] = useState('');

    /* Таймер */
    const timerRef = useRef<null | NodeJS.Timeout>(null);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    /* Обработка изменения значения строки поиска в текстовом поле формы */
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const textSearch  = event.target.value;
        setSearch(textSearch);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current  = setTimeout(() => {
            if (textSearch.length > 3) {                
                dispatch(searchActions.setSearchTitle(textSearch));  
                navigate("/search");
            }
        }, 500);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <img src={RaccoonHome} alt='Raccoon Home Page' />

                <TextInput
                    placeholder='Введите что-нибудь для поиска фильмов'
                    onChange={handleChange}
                    value={search}
                />
            </div>
            <div className='h1-medium'>ЕнотоКиноПоиск</div>
        </div>
    )
}