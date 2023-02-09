import { social_media } from "../../utils/social_media"
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'
import { Box, Link, Stack } from "@mui/material"

const SocialButtons = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Box className={styles.logogithub}>
                <Link
                    href={social_media[0].url}
                    target={"_blank"} rel="noreferrer"
                >
                    <Image src={social_media[0].src} alt={social_media[0].alt} width={32} height={32}/>
                </Link>
            </Box>
            <Box className={styles.logolinkedin}>
                <Link
                    href={social_media[1].url}
                    target="_blank" rel="noreferrer"
                >
                    <Image src={social_media[1].src} alt={social_media[1].alt} width={32} height={32}/>
                </Link>
            </Box>
            <Box className={styles.logoinstagram}>
                <Link
                    href={social_media[2].url}
                    target={"_blank"} rel="noreferrer"
                >
                    <Image src={social_media[2].src} alt={social_media[2].alt} width={32} height={32}/>
                </Link>
            </Box>
        </Stack>
    )
}

export default SocialButtons