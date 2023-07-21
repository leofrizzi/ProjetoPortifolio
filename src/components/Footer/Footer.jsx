import React from 'react'
import { user } from '../../data/user'
import { Contato } from '../Rodape/Rodape'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerDiv}>
                <Contato />
                <p>Todos os direitos reservados - <span>{user}</span></p>
            </div>
        </footer>
    )
}
export default Footer