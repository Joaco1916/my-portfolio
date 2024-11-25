// External
import Image from 'next/image';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';

// Internal
import { colorPalette } from '@/utils/color-palette';
import { socialMedia } from '@/utils/social-media';
import styles from '@/styles/Footer.module.css';

const SocialButtons = ({ language }) => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          background: `linear-gradient(270deg, ${colorPalette.stormi.normal} 40%, ${colorPalette.stormi.light} 60%, ${colorPalette.stormi.lightest} 80%)`,
          padding: 2,
          borderRadius: 8,
          justifyContent: 'space-around',
        }}
      >
        <Typography>
          {language === 'es'
            ? 'Creado por mi - Febrero 2023'
            : 'Built by me - February 2023'}
        </Typography>
        <Stack
          className={styles.flowingHighlight}
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            background: '#FFFFFF',
            borderRadius: 8,
            padding: 1,
            paddingRight: 2,
          }}
        >
          <Box className={styles.logogithub}>
            <Link href={socialMedia[0].url} target={'_blank'} rel="noreferrer">
              <Image
                src={socialMedia[0].src}
                alt={socialMedia[0].alt}
                width={32}
                height={32}
              />
            </Link>
          </Box>
          <Box className={styles.logolinkedin}>
            <Link href={socialMedia[1].url} target="_blank" rel="noreferrer">
              <Image
                src={socialMedia[1].src}
                alt={socialMedia[1].alt}
                width={32}
                height={32}
              />
            </Link>
          </Box>
          <Box className={styles.logoinstagram}>
            <Link href={socialMedia[2].url} target={'_blank'} rel="noreferrer">
              <Image
                src={socialMedia[2].src}
                alt={socialMedia[2].alt}
                width={32}
                height={32}
              />
            </Link>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default SocialButtons;
