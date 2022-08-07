import React from 'react';
import styles from './Button.module.scss';
import type { TButtonProps } from './types';

/**
 * Компонет Кнопка
 * @param props 
 * @class 
 */
const Button = (props: TButtonProps) => {
  const { children, ...other } = props;

  return (
    <>
      <button
        type='button'
        className={styles.btn}
        {...other}
      >
        {children}
      </button>
    </>
  );
};
export default Button;