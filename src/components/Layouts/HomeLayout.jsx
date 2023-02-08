import { Box, Grid, Typography } from "@mui/material"
import { experiences } from "../../utils/tmp_back/experiences"
import Experience from "../Experiences/Experience"
import SocialButtons from "../Footer/SocialButtons"
import RoundedPicture from "../Profile/RoundedPicture"
import SelfDescription from "../Profile/SelfDescription"
import TopBanner from "../Profile/TopBanner"

const HomeLayout = () => {
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
                    <Grid item xs={12}>
                        <TopBanner/>
                    </Grid>
                    {
                        experiences.map((experience) => (
                            <Grid item key={experience.id} xs={12} sm={6}>
                                <Experience experience={experience}/>
                            </Grid>
                        ))
                    }
                </Grid>
                {/* <SelfDescription /> */}
                <SocialButtons/>
        </Box>
    )
}

export default HomeLayout