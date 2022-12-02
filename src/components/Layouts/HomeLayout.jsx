import { Box } from "@mui/material"
import SocialButtons from "../Footer/SocialButtons"
import RoundedPicture from "../Profile/RoundedPicture"
import SelfDescription from "../Profile/SelfDescription"

const HomeLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <RoundedPicture />
            <SelfDescription />
            <SocialButtons/>
        </Box>
    )
}

export default HomeLayout