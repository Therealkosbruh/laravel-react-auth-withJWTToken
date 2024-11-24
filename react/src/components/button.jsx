import React from 'react';
import styles from '../css/AuthForm.module.css';

export const AuthButton = ({ text, type = 'button', name }) => {
    return (
      <button 
        type={type}
        name={name}
        className={styles.authButton}
        aria-label={text}
      >
        {text}
      </button>
    );
  };