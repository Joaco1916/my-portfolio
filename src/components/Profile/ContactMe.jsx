// External
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';

// Internal
import { colorPalette } from '@/utils/color-palette';

const ContactMe = ({ language }) => {
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
            {language === 'es' ? 'Contactame' : 'Contact me'}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4} p={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <PhoneIcon fontSize="large" />
              <Typography
                paddingX={2}
                fontFamily="Dosis"
                fontWeight={400}
                fontStyle={'italic'}
                fontSize={20}
              >
                {'+54 2932-517812'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} p={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <AlternateEmailIcon fontSize="large" />
              <Typography
                paddingX={2}
                fontFamily="Dosis"
                fontWeight={400}
                fontStyle={'italic'}
                fontSize={20}
              >
                {'joaquin_a_rodriguez@hotmail.com'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} p={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image
                src="/cv.png"
                alt="Picture of the author"
                width={35}
                height={35}
                quality={100}
                objectFit="cover"
              />
              <Link
                href={'/docs/CV-Joaquín-Rodriguez-English-version.pdf'}
                download
                color={'inherit'}
                underline={'none'}
              >
                <Typography
                  display={'flex'}
                  paddingX={2}
                  textAlign={'center'}
                  fontFamily="Dosis"
                  fontWeight={400}
                  fontStyle={'italic'}
                  fontSize={20}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {language === 'es' ? 'Descargar CV' : 'Download CV'}
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMe;
