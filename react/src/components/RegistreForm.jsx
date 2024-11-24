import React from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';

export const RegisterForm = () => {
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
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          />
          <AuthInput 
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <AuthInput 
            label="Patronymic"
            name="patronymic"
            placeholder="Enter your patronymic"
          />
          <AuthInput 
            label="Login"
            name="login"
            placeholder="Create your login"
            fullWidth
          />
          <AuthInput 
            label="Password"
            name="password"
            type="password"
            placeholder="Create your password"
            fullWidth
          />
          <AuthInput 
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            fullWidth
          />
        </div>
        <AuthButton 
          text="Зарегистрироваться"
          type="submit"
          name="submitRegister"
        />
      </form>
    );
  };