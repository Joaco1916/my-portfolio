import { Typography } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Period = ({ 
    startDate,
    endDate,
 }) => {
    return (
        <Typography sx={{ 
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
            fontStyle: 'italic',
            my: 0.5,
        }}>
            <CalendarMonthIcon/> {startDate} ~ {endDate}
        </Typography>
    )
}

export default Period