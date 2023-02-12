import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { experiences } from "../../utils/tmp_back/experiences"
import Experiences from "../Experiences/Experiences"
import SocialButtons from "../Footer/SocialButtons"
import TopBanner from "../Profile/TopBanner"

const HomeLayout = () => {

    const [ language, setLanguage ] = useState('es');

    const handleLanguageChange = ( newLanguage ) => {
        setLanguage(newLanguage);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
                <Grid container spacing={2} p={2}>
                    <TopBanner 
                        language={language}
                        handleLanguageChange={handleLanguageChange}
                    />
                    <Experiences 
                        experiences={experiences}
                        language={language}
                        handleLanguageChange={handleLanguageChange}
                    />
                </Grid>
                <SocialButtons/>
        </Box>
    )
}

export default HomeLayout