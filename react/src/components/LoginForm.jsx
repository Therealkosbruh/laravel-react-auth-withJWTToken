import React from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';

export const LoginForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form 
        className={styles.formContainer}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.formGrid}>
          <AuthInput 
            label="Login"
            name="login"
            placeholder="Enter your login"
            fullWidth
          />
          <AuthInput 
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            fullWidth
          />
        </div>
        <AuthButton 
          text="Войти"
          type="submit"
          name="submitLogin"
        />
      </form>
    );
  };