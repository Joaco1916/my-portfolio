// External
import { Box, Grid, Typography } from '@mui/material';

// Internal
import Study from '@/components/Studies/Study';
import { colorPalette } from '@/utils/color-palette';

const Studies = ({ language, studies }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: { sm: 'inherit', md: 'flex-end' },
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(90deg, ${colorPalette.stormi.darker} 40%, ${colorPalette.stormi.light} 80%)`,
            width: '250px',
            padding: 2,
            borderRadius: 8,
          }}
        >
          <Typography
            display={'flex'}
            justifyContent={'center'}
            fontFamily="Panton"
            fontWeight="normal"
            fontStyle={'normal'}
            fontSize={25}
          >
            {language === 'es' ? 'Educación' : 'Education'}
          </Typography>
        </Box>
      </Grid>
      {studies.map((study) => (
        <Grid item key={study.id} xs={12} sm={6}>
          <Study study={study} language={language} />
        </Grid>
      ))}
    </>
  );
};

export default Studies;
