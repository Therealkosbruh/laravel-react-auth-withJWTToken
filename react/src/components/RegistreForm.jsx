// import React from 'react';
// import { AuthInput } from './input';
// import { AuthButton } from './button';
// import styles from '../css/AuthForm.module.css';
// import { useState } from 'react';
// import axiosClient from '../axios-client';


// export const RegisterForm = () => {
//   const [form, setForm] = useState({
//     lastName: '',
//     firstName: '',
//     patronymic: '',
//     login: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosClient.post('/signup', form);
//       alert('Registration successful!');
//     } catch (error) {
//       setError(error.response.data.message || 'Something went wrong');
//     }
//   };
  
//     return (
//       <form 
//         className={styles.formContainer}
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         <div className={styles.formGrid}>
//           <AuthInput 
//             label="Last Name"
//             name="lastName"
//             placeholder="Enter your last name"
//           />
//           <AuthInput 
//             label="First Name"
//             name="firstName"
//             placeholder="Enter your first name"
//           />
//           <AuthInput 
//             label="Patronymic"
//             name="patronymic"
//             placeholder="Enter your patronymic"
//           />
//           <AuthInput 
//             label="Login"
//             name="login"
//             placeholder="Create your login"
//             fullWidth
//           />
//           <AuthInput 
//             label="Password"
//             name="password"
//             type="password"
//             placeholder="Create your password"
//             fullWidth
//           />
//           <AuthInput 
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             fullWidth
//           />
//         </div>
//         <AuthButton 
//           text="Зарегистрироваться"
//           type="submit"
//           name="submitRegister"
//         />
//       </form>
//     );
//   };

import React, { useState } from 'react';
import { AuthInput } from './input';
import { AuthButton } from './button';
import styles from '../css/AuthForm.module.css';
import axiosClient from '../axios-client';

export const RegisterForm = () => {
  const [form, setForm] = useState({
    last_name: '', 
    first_name: '',
    middle_name: '',
    login: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); 

    try {
      await axiosClient.post('/signup', form); 
      alert('Registration successful!');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Something went wrong. Please try again.');
      }
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
          name="last_name"
          value={form.last_name}
          placeholder="Enter your last name"
          onChange={handleChange}
          error={errors.last_name} 
        />
        <AuthInput
          label="First Name"
          name="first_name"
          value={form.first_name}
          placeholder="Enter your first name"
          onChange={handleChange}
          error={errors.first_name}
        />
        <AuthInput
          label="Patronymic"
          name="middle_name"
          value={form.middle_name}
          placeholder="Enter your patronymic"
          onChange={handleChange}
          error={errors.middle_name}
        />
        <AuthInput
          label="Login"
          name="login"
          value={form.login}
          placeholder="Create your login"
          onChange={handleChange}
          fullWidth
          error={errors.login}
        />
        <AuthInput
          label="Password"
          name="password"
          value={form.password}
          type="password"
          placeholder="Create your password"
          onChange={handleChange}
          fullWidth
          error={errors.password}
        />
        <AuthInput
          label="Email"
          name="email"
          value={form.email}
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          fullWidth
          error={errors.email}
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
