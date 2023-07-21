import React from 'react'
import { username } from '../../../data/user'
import { Portfolio } from './Portfolio'
import bannerImg from '../../../assets/banner-img.png'
import styles from './styles.module.css'

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <Portfolio username={username} interestingPhrase={'Uma frase interessante sobre mim'} >
                <h1 className={styles.title}>Bem-vindo ao meu Portfolio</h1>
            </Portfolio>
            <img className={styles.image} src={bannerImg} alt='banner-image' />
        </section>
    )
}