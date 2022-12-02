import { social_media } from "../../utils/social_media"
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'
import { Box } from "@mui/material"

const SocialButtons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
                <a
                    href={social_media[0].url}
                    target={"_blank"} rel="noreferrer"
                >
                    <span className={styles.logogithub}>
                        <Image src={social_media[0].src} alt={social_media[0].alt} width={32} height={32}/>
                    </span>
                </a>
                <a
                    href={social_media[1].url}
                    target={"_blank"} rel="noreferrer"
                >
                    <span className={styles.logolinkedin}>
                        <Image src={social_media[1].src} alt={social_media[1].alt} width={32} height={32}/>
                    </span>
                </a>
                <a
                    href={social_media[2].url}
                    target={"_blank"} rel="noreferrer"
                >
                    <span className={styles.logoinstagram}>
                        <Image src={social_media[2].src} alt={social_media[2].alt} width={32} height={32}/>
                    </span>
                </a>
            </Box>
    )
}

export default SocialButtons