import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { aboutMe } from "../../utils/tmp-back/about-me"
import { experiences } from "../../utils/tmp-back/experiences"
import { studies } from "../../utils/tmp-back/studies"
import Experiences from "../Experiences/Experiences"
import SocialButtons from "../Footer/SocialButtons"
import AboutMe from "../Profile/AboutMe"
import ContactMe from "../Profile/ContactMe"
import TopBanner from "../Profile/TopBanner"
import Studies from "../Studies/Studies"

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
                <AboutMe
                    language={language}
                    aboutMe={aboutMe}
                />
                <Studies
                    language={language}
                    studies={studies}
                />
                <Experiences 
                    experiences={experiences}
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                />
                <ContactMe
                    language={language}
                />
                <SocialButtons
                    language={language}
                />
            </Grid>
        </Box>
    )
}

export default HomeLayout