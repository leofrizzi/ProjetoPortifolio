import { Header } from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './styles.module.css'

export const Template = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}