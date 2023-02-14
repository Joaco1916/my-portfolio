import { Box, Grid, Typography } from "@mui/material"
import { colorPalette } from "../../utils/colorPalette"

const ContactMe = ({ 
    language,
}) => {
    return (
        <Grid item xs={12}
            sx={{
                display: 'flex',
                justifyContent:{ sm:'inherit', md:'flex-end'},
            }}
        >
            <Box
                sx={{
                    background: `linear-gradient(90deg, ${colorPalette.stormi.darker} 40%, ${colorPalette.stormi.lighter} 80%)`,
                    width:'250px',
                    padding: 2,
                    borderRadius: 8,
                }}
            >
                <Typography
                    display={'flex'}
                    justifyContent={'center'}
                    fontFamily="Panton"
                    fontWeight="normal"
                    fontStyle={'normal'}
                    fontSize={25}
                    >
                    {language === 'es' ? 'Contactame' : 'Contact me'}
                </Typography>
            </Box>
        </Grid>
    )
}

export default ContactMe