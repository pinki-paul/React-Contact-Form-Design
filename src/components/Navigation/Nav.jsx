import React from "react";
import Logo from '../../images/logo.png';
import styles from './Navigation.module.css';

export default function Nav(){
    return(
        <nav className={`${styles.navigation} container`} >
            <div className="logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>

            <ul className="menu-list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}