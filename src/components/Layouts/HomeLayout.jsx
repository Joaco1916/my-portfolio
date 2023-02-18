import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { aboutme } from "../../utils/tmp_back/aboutme"
import { experiences } from "../../utils/tmp_back/experiences"
import { studies } from "../../utils/tmp_back/studies"
import Experiences from "../Experiences/Experiences"
import SocialButtons from "../Footer/SocialButtons"
import AboutMe from "../Profile/AboutMe"
import ContactMe from "../Profile/ContactMe"
import TopBanner from "../Profile/TopBanner"
import Studies from "../Studies/Studies"

const HomeLayout = () => {

    const [ language, setLanguage ] = useState('es');
    //const [ opacity, setOpacity ] = useState(1);

    const handleLanguageChange = ( newLanguage ) => {
        setLanguage(newLanguage);
    }

    // useEffect(() => {
    //     function handleScroll() {
    //         const scrollPosition = window.scrollY;
    //         const newOpacity = 1 - (scrollPosition / 500); // 500 es la posición en píxeles donde queremos que el elemento se haya desvanecido completamente
    //         setOpacity(newOpacity);
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                //opacity: opacity,
            }}
        >
            <Grid container spacing={2} p={2}>
                <TopBanner 
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                />
                <AboutMe
                    language={language}
                    aboutMe={aboutme}
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