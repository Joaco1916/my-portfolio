import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react";
import styles from '../../../styles/RoundedPicture.module.css'

const RoundedPicture = () => {

    const [color, setColor] = useState(0);

    const colors = [
        styles.flowingHighlightRed,
        styles.flowingHighlightBlue,
        styles.flowingHighlightGreen,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = Math.floor(Math.random() * 3);
            setColor(randomColor);
        }, 1000);
        return () => clearInterval(interval);
    }, [color]);

    return (
        <Box
            className={ styles.flowingHighlight }
            sx={{
                width: 200,
                height: 200,
                borderRadius: 8,
                overflow: 'hidden',
            }}
        >
            <Image
                src="/foto_perfil.png"
                alt="Picture of the author"
                width={250}
                height={250}
                quality={100}
                objectFit="cover"
            />
        </Box>
    )
}

export default RoundedPicture