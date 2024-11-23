// External
import { Box, Typography } from '@mui/material';

const DesignTitle = ({ title }) => {
	return (
		<Box margin={2} padding={2} border={'1px solid red'}>
			<Typography>{title}</Typography>
		</Box>
	);
};

export default DesignTitle;
