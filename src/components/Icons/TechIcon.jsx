import { Box } from "@mui/material"
import Image from "next/image"

const TechIcon = ({ icon }) => {
    return(
        <Box
            mt={0.5}
            ml={1}
        >
            <Image
                src={icon}
                alt=""
                width={16}
                height={16}
            />
        </Box>
    )
}

export default TechIcon