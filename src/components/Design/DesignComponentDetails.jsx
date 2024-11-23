// External
import { Box, Typography } from '@mui/material';

const DesignComponentDetails = ({ component }) => {
  return (
    <Box margin={2} padding={2} border={'1px solid Blue'}>
      <Typography variant="h6">{component?.name}</Typography>
      {component.implementation}
      <Typography>{component?.description}</Typography>
    </Box>
  );
};

export default DesignComponentDetails;
