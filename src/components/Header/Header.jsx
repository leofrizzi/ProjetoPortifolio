import React, { useState } from 'react'
import { Nav } from '../Nav/Nav'
import { Button } from '../Buttons/Buttons'
import logo from '../../assets/portfolio.png'
import { Modal } from '../Modal/Modal'
import styles from './styles.module.css'

export const Header = () => {
    const menuItems = ['Sobre', 'Slack', 'Projetos']
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => {
        console.log(showModal)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo-portfólio' />
            <Nav menuItems={menuItems} />
            <Button onClick={handleOpenModal} textContent={'Contato'} classType={'headerDefaultButton'} />
            <Modal isOpen={showModal} onClose={handleCloseModal} title={'Fale comigo'}>

            </Modal>
        </header>
    )
}