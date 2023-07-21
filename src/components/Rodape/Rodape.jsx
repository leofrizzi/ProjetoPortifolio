import React from 'react'
import whatsApp from '../../assets/whatsapp-icon.png'
import linkdin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'
import styles from './styles.module.css'

export const Contato = () => {
    return (
        <div className={styles.div}>
            <h2 className={styles.h2}>Contato</h2>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={whatsApp} />
                <img className={styles.logo} src={linkdin} />
                <img className={styles.logo} src={github} />
            </div>
        </div>
    )
}