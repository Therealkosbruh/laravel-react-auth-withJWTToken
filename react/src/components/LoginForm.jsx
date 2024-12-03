import React, { useState } from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';
import axiosClient from '../axios-client';
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [form, setForm] = useState({
    login: '', 
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.login || !form.password) {
      setError('All fields are required!');
      return;
    }
    try {
      const response = await axiosClient.post('/login', form);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate("/main"); // Redirect to Main
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
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
          label="Login" 
          name="login" 
          placeholder="Enter your login"
          value={form.login} 
          onChange={handleChange}
          fullWidth
        />
        <AuthInput 
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password} 
          onChange={handleChange}
          fullWidth
        />
      </div>
      <AuthButton 
        text="Войти"
        type="submit"
        name="submitLogin"
      />
      {error && <p>{error}</p>}
    </form>
  );
};
