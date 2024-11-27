// import React from 'react';
// import { AuthInput } from './input';
// import { AuthButton } from './button';
// import styles from '../css/AuthForm.module.css';
// import { useState } from 'react';
// import axiosClient from '../axios-client';


// export const LoginForm = () => {
//     const handleSubmit = (e) => {
//       e.preventDefault();
//     };

//     return (
//       <form 
//         className={styles.formContainer}
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         <div className={styles.formGrid}>
//           <AuthInput 
//             label="Login"
//             name="login"
//             placeholder="Enter your login"
//             onChange={handleChange}
//             fullWidth
//           />
//           <AuthInput 
//             label="Password"
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             onChange={handleChange}
//             fullWidth
//           />
//         </div>
//         <AuthButton 
//           text="Войти"
//           type="submit"
//           name="submitLogin"
//         />
//         {error && <p>{error}</p>}
//       </form>
//     );
//   };

import React, { useState } from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';
import axiosClient from '../axios-client';

export const LoginForm = () => {
  const [form, setForm] = useState({
    login: '', // Или 'email', в зависимости от вашего API
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/login', form); // Применяем /login
      // Сохраняем токен в localStorage или context (если используете)
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      // Дополнительно можно перенаправить пользователя на защищенную страницу
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
          label="Login" // "Email" если у вас email
          name="login" 
          placeholder="Enter your login"
          value={form.login} // Связать значение с состоянием
          onChange={handleChange}
          fullWidth
        />
        <AuthInput 
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password} // Связать значение с состоянием
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
