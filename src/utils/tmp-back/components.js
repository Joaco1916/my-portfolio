// External
import { Box, Typography } from '@mui/material';

// Internal
import { colorPalette } from '@/utils/color-palette';
import Dot from '@/components/Basics/Dot';

const colorGamma = [
  'darkest',
  'darker',
  'normal',
  'normal_lighter',
  'light',
  'lightest',
];

export const defaultComponent = {
  id: 'componente',
  name: 'Componente',
  description: 'Selecciona un componente para ver sus detalles',
  implementation: (
    <Box>
      <Typography>Implementación del componente</Typography>
    </Box>
  ),
};

export const components = [
  {
    id: 'componente1',
    name: 'Componente 1',
    description: 'Descripción del componente 1',
    implementation: (
      <Box>
        <Typography>Implementación del componente 1</Typography>
      </Box>
    ),
  },
  {
    id: 'color-palette',
    name: 'Paleta de colores',
    description: 'Descripción de la paleta de colores',
    implementation: (
      <Box display={'flex'} flexDirection={'column'} marginY={2}>
        <Typography variant={'h6'}>
          Implementación de la paleta de colores
        </Typography>
        {Object.keys(colorPalette).map((pallet) => (
          <>
            <Typography key={pallet}> {pallet} </Typography>
            <Box
              key={pallet}
              display={'flex'}
              flexDirection={'row'}
              marginY={1}
            >
              {colorGamma.map((color, index) => (
                <Box
                  key={color}
                  display={'flex'}
                  position={'relative'}
                  right={`${index * 50}px`}
                >
                  <Dot color={colorPalette[pallet][color]} />
                </Box>
              ))}
            </Box>
          </>
        ))}
      </Box>
    ),
  },
];
