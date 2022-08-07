import React from 'react';

import styles from './TextInput.module.scss';
import type { TTextInputProps } from './types';

/**
 * Компонент Текстовое поле для ввода
 * @param props 
 * @class 
 */
const TextInput = (props: TTextInputProps) => {
  return (
    <>
      <input
        className={styles.input}
        {...props}
      />
    </>
  );
};
export default TextInput;