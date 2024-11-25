// External
import { Box, Typography } from '@mui/material';

const DesignTitle = ({ title }) => {
  return (
    <Box
      margin={2}
      padding={2}
      borderRadius={8}
      bgcolor={'#f5f5f5'}
      border={'1px'}
    >
      <Typography variant="body1">Componente</Typography>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default DesignTitle;
