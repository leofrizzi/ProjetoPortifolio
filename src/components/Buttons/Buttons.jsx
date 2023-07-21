import React from 'react'
import styles from './styles.module.css'

export const Button = ({ textContent, classType, onClick }) => {
    const buttonClassType = `${styles[classType]} ${styles.buttonDefault}`

    return (
        <button className={buttonClassType} onClick={onClick}>
            {textContent}
        </button>
    )
}