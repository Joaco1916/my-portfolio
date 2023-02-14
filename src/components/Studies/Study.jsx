//Next
import Image from 'next/image';

//Styles
import styles from '../../../styles/Study.module.css'

//Material UI
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//Material UI Icons
import Location from '../Basics/Location';
import Period from '../Basics/Period';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})
(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    }),
}));

const Study = ({ 
    study,
    language,
}) => {

    const { title, institute, location, metodology, icon, startDate, endDate } = study;

    return (
        <Box 
            className={styles.flowingHighlight}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 20,
            }}
        >
            <Grid container spacing={2} p={2}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            py: 2,
                        }}
                    >    
                        <Image
                            src={icon.path}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '16px',
                    }}>{ language === 'es' ? title.es : title.en }</Typography>

                    <Typography sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '14px',
                    }}>{institute}</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Location location={location}/>
                        <Period 
                            startDate={ language === 'es' ? startDate.es : startDate.en} 
                            endDate={ language === 'es' ?  endDate.es : endDate.en}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Study;