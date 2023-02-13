//Next
import Image from 'next/image';

//React
import { useState } from 'react';

//Styles
import styles from '../../../styles/Experience.module.css'

//Material UI
import { Box, Button, CardContent, Collapse, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//Material UI Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Location from './Location';
import Period from './Period';
import Tools from './Tools';

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

const Experience = ({ 
    experience,
    language,
}) => {

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

            <Collapse 
                in={expanded} 
                timeout="auto" 
                unmountOnExit
                sx={{
                    transition: 'height 3.5s ease-in-out',
                    height: expanded ? 'auto' : 0,
                    overflow: 'hidden',
                }}
            >
                <CardContent
                    sx={{
                        color: 'black',
                        background: 'linear-gradient(180deg, #FFFFFF 70%, #cecece 100%)',
                        borderRadius: '10px',
                        borderBottom: '1px solid gray',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Location location={location}/>
                        <Period startDate={startDate} endDate={endDate}/>
                        <Tools tools={experience.tecnologies} language={language}/>
                    </Box>

                    {/* <Typography paragraph>{description.es_AR}</Typography> */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'black',
                                background: 'linear-gradient(180deg, #FFFFFF 70%, #cecece 100%)',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                borderRadius: 8,
                                border: '1px solid gray',
                                my: 1,
                            }}
                        >
                            { language === 'es' ? 'Ver más' : 'See more'}
                        </Button>
                    </Box>
                </CardContent>
            </Collapse>
        </Box>
    );
}

export default Experience;