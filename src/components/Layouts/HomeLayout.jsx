import { Box, Grid, Typography } from "@mui/material"
import { experiences } from "../../utils/tmp_back/experiences"
import Experience from "../Experiences/Experience"
import SocialButtons from "../Footer/SocialButtons"
import RoundedPicture from "../Profile/RoundedPicture"
import SelfDescription from "../Profile/SelfDescription"


const HomeLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <RoundedPicture />
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '24px',
                textAlign: 'center',
                p: 2,
            }}>Joaquín Rodriguez</Typography>
            <Grid container spacing={2} p={2}>
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