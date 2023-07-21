import React from 'react'
import styles from './styles.module.css'

export const Nav = ({ menuItems }) => {
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navUl}>
                {
                    menuItems.map((item, index) => {
                        return (
                            <li className={styles.navLi} key={index}>{item}</li>
                        )
                    }
                    )}
            </ul>
        </nav>
    )
}