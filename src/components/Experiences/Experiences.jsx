import { Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import Experience from "./Experience"

const Experiences = ({
    language,
    experiences
}) => {
    return(
        <Fragment>
            <Grid item xs={12}>
                <Typography
                    ml={2}
                    fontFamily="Pacifico"
                    fontSize={25}
                >
                    {language === 'es' ? 'Experiencias' : 'Experiences'}
                </Typography>
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