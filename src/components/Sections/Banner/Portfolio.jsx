import React from 'react'
import { Button } from '../../Buttons/Buttons'
import styles from './styles.module.css'

export const Portfolio = ({ username, interestingPhrase, children }) => {
    return (
        <div className={styles.div}>
            <span className={styles.username}>{username}</span>
            {children}
            <span className={styles.phrase}><cite>{interestingPhrase}</cite></span>
            <Button textContent={'Saiba Mais'} classType={'bannerSectionButton'} />
        </div>
    )
}