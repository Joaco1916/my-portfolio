import { Box, Typography } from "@mui/material"
import Pill from "../Basics/Pill"
import BuildIcon from '@mui/icons-material/Build';

const Tools = ({
    tools,
    language,
}) => {
    return(
        <Box>
            <Typography>
                <BuildIcon sx={{ mr: 0.25 }}/>
                {
                    language === 'es' ? 
                    'Herramientas utilizadas:' :
                    'Tools used:'
                }
            </Typography>
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
    )
}

export default Tools