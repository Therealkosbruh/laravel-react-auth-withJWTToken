import React, { useEffect, useState } from "react";
import styles from "../css/main.module.css";
import { useNavigate } from "react-router-dom";  
import { jwtDecode } from 'jwt-decode';  

export default function Main() {
    const [userLogin, setUserLogin] = useState(null);
    const navigate = useNavigate();  
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token from localStorage:', token);  

        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log('Decoded token:', decoded);  

                if (decoded && decoded.login) {
                    console.log('Found login in token:', decoded.login);  
                    setUserLogin(decoded.login);  
                } else {
                    console.log('Login not found in token');
                    setUserLogin(null);
                    navigate('/auth');  
                }
            } catch (error) {
                console.error("Error decoding token", error);
                navigate('/auth'); 
            }
        } else {
            console.log('No token found in localStorage');
            navigate('/auth');  
        }
    }, [navigate]);  

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth');
    };

    return (
        <div>
            <div className={styles["header-text"]} aria-hidden="true">
                Welcome<br />
                <span
                    className={styles["glow-filter"]}
                    data-text={userLogin ? `Welcome, ${userLogin}` : "Illuminated Glow Text"}
                >
                    {userLogin ? `Welcome, ${userLogin}` : "Illuminated Glow Text"}
                </span>
                <br />
                <br />
            </div>
            <button 
                className={styles.logoutButton}
                onClick={handleLogout}
            >
                Out
            </button>
        </div>
    );
}
