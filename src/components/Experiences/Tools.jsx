import { Box, Typography } from "@mui/material"
import Pill from "../Basics/Pill"
import BuildIcon from '@mui/icons-material/Build';

const Tools = ({
    tools,
    language,
}) => {
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <Typography
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '14px',
                    my: 0.5,
                }}
            >
                <BuildIcon sx={{ mr: 1 }}/>
                {
                    language === 'es' ? 
                    'Herramientas utilizadas:' :
                    'Tools used:'
                }
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {
                    tools.map((tool, index) => {
                        return(
                            <Pill 
                                key={index} 
                                name={tool.name} 
                                color={tool.color} 
                                icon={tool.icon}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Tools