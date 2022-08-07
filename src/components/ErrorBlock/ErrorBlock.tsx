import React from "react";
import ImageError from "../../assets/image-3.svg";
import styles from "./ErrorBlock.module.scss";

/**
 * Компонент Блок отображения текста ошибки
 * @class
 */
function ErrorBlock() {
    return (
        <div className={styles.wrapper}>
            <div className='h3-regular'>Упс, что-то пошло не так</div>
            <img src={ImageError} alt='' />
        </div>
    )
}

export default ErrorBlock;