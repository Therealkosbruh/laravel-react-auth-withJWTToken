// import React from 'react';
// import styles from '../css/AuthForm.module.css';
// import { AuthInput } from './input';
// import { AuthButton } from './button';

// export const AuthForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <main className={styles.container}>
//       <nav className={styles.navigation} aria-label="Authentication options">
//         <button 
//           name="loginTab"
//           className={styles.activeTab}
//           aria-current="page"
//         >
//           Login
//         </button>
//         <button 
//           name="registerTab"
//           className={styles.inactiveTab}
//         >
//           Register
//         </button>
//       </nav>
      
//       {/* <div 
//         className={styles.activeLine} 
//         role="presentation"
//       /> */}
      
//       <h1 className={styles.welcomeText}>
//         Добро пожаловать
//       </h1>
      
//       <form 
//         className={styles.formContainer}
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         <AuthInput 
//           label="Login"
//           name="username"
//           placeholder="Enter your username"
//         />
//         <AuthInput 
//           label="Password"
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//         />
//         <AuthButton 
//           text="Войти"
//           type="submit"
//           name="submitLogin"
//         />
//       </form>
//     </main>
//   );
// };


import React, { useState } from 'react';
import styles from '../css/AuthForm.module.css';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegistreForm';

export const AuthForm = () => {
    const [activeTab, setActiveTab] = useState('login');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <main className={styles.container}>
        <nav className={styles.navigation} aria-label="Authentication options">
          <button 
            name="loginTab"
            className={activeTab === 'login' ? styles.activeTab : styles.inactiveTab}
            onClick={() => handleTabChange('login')}
            aria-current={activeTab === 'login' ? 'page' : undefined}
          >
            Login
          </button>
          <button 
            name="registerTab"
            className={activeTab === 'register' ? styles.activeTab : styles.inactiveTab}
            onClick={() => handleTabChange('register')}
            aria-current={activeTab === 'register' ? 'page' : undefined}
          >
            Register
          </button>
        </nav>
        
        <h1 className={styles.welcomeText}>
          Добро пожаловать
        </h1>
        
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </main>
    );
  };