import { social_media } from "../../utils/social_media"
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { colorPalette } from "../../utils/colorPalette"

const SocialButtons = ({
    language
}) => {
    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    //background: `${colorPalette.stormi.lightest}`,
                    background: `linear-gradient(270deg, ${colorPalette.stormi.normal} 40%, ${colorPalette.stormi.lighter} 60%, ${colorPalette.stormi.lightest} 80%)`,
                    padding: 2,
                    borderRadius: 8,
                    justifyContent: 'space-around'
                }}
            >
                <Typography>
                    { language === 'es' ? 'Creado por mi - Febrero 2023' : 'Built by me - February 2023'}
                </Typography>
                <Stack
                    className={ styles.flowingHighlight }
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{
                        background:'#FFFFFF',
                        borderRadius: 8,
                        padding: 1,
                        paddingRight: 2,
                    }}
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
            </Box>
        </Grid>
    )
}

export default SocialButtons