import { Box, CardContent, Collapse, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../../styles/Experience.module.css'
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const Experience = ({ experience }) => {

    const { title, company, location, icon, startDate, endDate, description } = experience;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box 
            className={styles.flowingHighlight}
            onClick={handleExpandClick}
        >
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
            <Typography sx={{ 
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '16px',
            }}>{title}</Typography>

            <Typography sx={{ 
                display: 'flex',
                justifyContent: 'center',
                fontSize: '14px',
            }}>{company}</Typography>

            <Box
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ExpandMore
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent
                    sx={{
                        color: 'black',
                        background: 'linear-gradient(180deg, #FFFFFF 70%, #cecece 100%)',
                        borderRadius: '10px',
                        borderBottom: '1px solid gray',
                        width: '100%',
                    }}
                >
                    <Typography sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '14px',
                    }}> <LocationOnIcon/>{location}</Typography>

                    <Typography sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontStyle: 'italic',
                    }}> <CalendarMonthIcon/> {startDate} - {endDate}</Typography>

                    <Typography paragraph>{description.es_AR}</Typography>
                </CardContent>
            </Collapse>
        </Box>
    );
}

export default Experience;