import SocialIcon from "./SocialIcon"
import { social_media } from "../../utils/social_media"
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* 
                social_media.map( ( social ) => (
                    <SocialIcon 
                        url={social.url}
                        alt={social.alt}
                        src={social.src}
                    />
                ))
                */}
            <div className={styles.flexbox}>
                <a
                    href={social_media[0].url}
                    target={"_blank"}
                >
                    <span className={styles.logogithub}>
                        <Image src={social_media[0].src} alt={social_media[0].alt} width={32} height={32}/>
                    </span>
                </a>
                <a
                    href={social_media[1].url}
                    target={"_blank"}
                >
                    <span className={styles.logolinkedin}>
                        <Image src={social_media[1].src} alt={social_media[1].alt} width={32} height={32}/>
                    </span>
                </a>
                <a
                    href={social_media[2].url}
                    target={"_blank"}
                >
                    <span className={styles.logoinstagram}>
                        <Image src={social_media[2].src} alt={social_media[2].alt} width={32} height={32}/>
                    </span>
                </a>
            </div>
            <div className={styles.flexbox}>
                <p>Creado por Joaquín Rodriguez - 2022</p>
            </div>
        </footer>
    )
}

export default Footer