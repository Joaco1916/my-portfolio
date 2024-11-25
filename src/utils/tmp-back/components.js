// External
import { Box, Typography } from '@mui/material';

// Internal
import ColorPalette from '@/components/Design/ColotPalette';

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
    implementation: <ColorPalette />,
  },
];
