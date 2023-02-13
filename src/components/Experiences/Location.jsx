import { Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = ({ location }) => {
    return (
        <Typography sx={{ 
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
            my: 0.5,
        }}> 
            <LocationOnIcon/>{location}
        </Typography>
    )
}

export default Location