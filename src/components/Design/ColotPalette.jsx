// External
import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

// Internal
import Dot from '@/components/Basics/Dot';
import { colorPalette } from '@/utils/color-palette';

const ColorPalette = () => {
  const colorGamma = [
    'darkest',
    'darker',
    'normal',
    'normal_lighter',
    'light',
    'lightest',
  ];

  return (
    <Box display={'flex'} flexDirection={'column'} marginY={2}>
      <Typography variant={'h6'}>
        Implementación de la paleta de colores
      </Typography>
      {Object.keys(colorPalette).map((pallet) => (
        <Fragment key={pallet}>
          <Typography> {pallet} </Typography>
          <Box display={'flex'} flexDirection={'row'} marginY={1}>
            {colorGamma.map((color, index) => (
              <Box
                key={color}
                display={'flex'}
                position={'relative'}
                right={`${index * 75}px`}
              >
                <Dot color={colorPalette[pallet][color]} />
              </Box>
            ))}
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default ColorPalette;
