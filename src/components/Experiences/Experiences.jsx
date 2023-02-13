import { Box, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
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
                        background: 'linear-gradient(90deg, #B5D43B 60%, #D9EF82 90%)',
                        width:'250px',
                        padding: 2,
                        borderRadius: 8,
                    }}
                >
                    <Typography
                        ml={2}
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