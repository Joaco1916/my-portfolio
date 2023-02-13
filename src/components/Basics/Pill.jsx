
import { Box, Chip } from "@mui/material"
import TechIcon from "../Icons/TechIcon"

const Pill = ({
    name,
    color,
    icon,
}) => {
    return (
        <Box m={0.25} display={'inline-flex'}>
            <Chip
                label={name} 
                variant="outlined"
                sx={{
                    borderColor: color,
                    backgroundColor: `${color}20`,
                    color: '#000000',
                }}
                icon={
                    <TechIcon icon={icon}/>
                }
            />
        </Box>
    )
}

export default Pill