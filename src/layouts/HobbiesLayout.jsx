// Libraries
import { Box } from "@mui/material"

// Customs
import Parallax from "@/components/Parallax/Parallax"

const HobbiesLayout = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Parallax />
        </Box>
    )
}

export default HobbiesLayout