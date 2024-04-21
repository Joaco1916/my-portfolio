import { Box, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import { colorPalette } from "../../utils/color-palette"
import Experience from "./Experience"

const Experiences = ({
    language,
    experiences
}) => {
    return(
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
                        {language === 'es' ? 'Experiencias' : 'Experiences'}
                    </Typography>
                </Box>
            </Grid>
            {
                experiences.map((experience) => (
                    <Grid item key={experience.id} xs={12} sm={6}>
                        <Experience experience={experience} language={language}/>
                    </Grid>
                ))
            }
        </Fragment>
    )
}

export default Experiences