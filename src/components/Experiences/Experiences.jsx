// External
import { Box, Grid, Typography } from '@mui/material';

// Internal
import Experience from '@/components/Experiences/Experience';
import { colorPalette } from '@/utils/color-palette';

const Experiences = ({ language, experiences }) => {
  return (
    <>
      <Grid item xs={12}>
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
            {language === 'es' ? 'Experiencias' : 'Experiences'}
          </Typography>
        </Box>
      </Grid>
      {experiences.map((experience) => (
        <Grid item key={experience.id} xs={12} sm={6}>
          <Experience experience={experience} language={language} />
        </Grid>
      ))}
    </>
  );
};

export default Experiences;
