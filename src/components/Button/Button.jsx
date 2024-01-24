import React from 'react';
import styles from './Button.module.css';


export default function Button({ isOutline, icon, text }) {

    return (
        <button  className={isOutline ? styles.outline_btn : styles.primary_btn} >
            {icon}
            {text}

        </button>
    )
}