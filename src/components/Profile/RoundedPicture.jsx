import { Box, Typography } from "@mui/material"
import Image from "next/image"
import styles from '../../../styles/RoundedPicture.module.css'

const RoundedPicture = () => {
    return (
        <Box
            className={styles.flowingHighlight}
            sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                overflow: 'hidden',
            }}
        >
            <Image
                src="/foto_perfil.png"
                alt="Picture of the author"
                width={250}
                height={250}
                objectFit="none"
            />
        </Box>
    )
}

export default RoundedPicture