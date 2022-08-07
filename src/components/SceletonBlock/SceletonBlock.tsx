import React from 'react';
import classnames from 'classnames';

import ImageDefault from './../../assets/Image.svg'

import styles from './SceletonBlock.module.scss';

/**
 * Компонент Элемент списка в блоке загрузки
 * @class
 */
function SceletonItem() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={ImageDefault} alt='' />
            </div>
            <div className={styles.info}>
                <div className={classnames(styles.block, styles.width213)} />
                <div className={classnames(styles.block, styles.width529)} />
                <div className={classnames(styles.block, styles.width372)} />
            </div>
        </div>
    )
}

/**
 * Компонент Блок ожидания загрузки данных
 * @class
 */
function SceletonBlock() {
    return (
        <div className={styles.wrapper}>
            <SceletonItem />
            <SceletonItem />
            <SceletonItem />
        </div>
    )
}

export default SceletonBlock;
