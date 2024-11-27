import React from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';
import { useState } from 'react';
import axiosClient from '../axios-client';


export const RegisterForm = () => {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    patronymic: '',
    login: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post('/register', form);
      alert('Registration successful!');
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong');
    }
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