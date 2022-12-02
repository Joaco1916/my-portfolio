import styles from '../../../styles/Footer.module.css'
import SocialButtons from "./SocialButtons"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <SocialButtons/>
            <div className={styles.flexbox}>
                <p>Creado por Joaquín Rodriguez - 2022</p>
            </div>
        </footer>
    )
}

export default Footer