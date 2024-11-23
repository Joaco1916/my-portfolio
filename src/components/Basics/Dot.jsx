// External
import { Box } from '@mui/material';

const Dot = ({ color }) => {
  return (
    <Box
      width={100}
      height={100}
      borderRadius="50%"
      color={color}
      bgcolor={color}
      border={'1px solid black'}
    />
  );
};

export default Dot;
