import { Box, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import { colorPalette } from "../../utils/colorPalette"

const AboutMe = ({ 
    language,
    aboutMe 
}) => {
    return (
        <Fragment>
            <Grid item xs={12}>
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
                        {language === 'es' ? aboutMe.es.title : aboutMe.en.title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        px: 6,
                    }}
                >
                    {
                        language === 'es' 
                        ? 
                        aboutMe.es.descriptions.map((description, index) => (
                            <Typography
                                key={index}
                                component={'p'}
                                display={'flex'}
                                textAlign={'center'}
                                fontFamily="Dosis"
                                fontWeight={400}
                                fontStyle={'italic'}
                                fontSize={20}
                                mb={2}
                            >
                                {description}
                            </Typography>
                        )) 
                        :
                        aboutMe.en.descriptions.map((description, index) => (
                            <Typography
                                key={index}
                                component={'p'}
                                display={'flex'}
                                textAlign={'center'}
                                fontFamily="Dosis"
                                fontWeight={400}
                                fontStyle={'italic'}
                                fontSize={20}
                                mb={2}
                            >
                                {description}
                            </Typography>
                        )) 
                    }
                </Box>
            </Grid>
        </Fragment>
    )
}

export default AboutMe