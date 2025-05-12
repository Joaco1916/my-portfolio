// External
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useState } from "react";

// Internal
import RoundedPicture from '@/components/Profile/RoundedPicture';

const HomeLayoutV2 = () => {

    const [ language, setLanguage ] = useState('es');

    return (
      <Grid 
        container 
        spacing={2}
        height={'100vh'}
        border={1}
        borderColor={'blue'}
        padding={2}
      >
        <Grid 
          size={{sm:4, md:3}}
          display={{xs: 'none', sm: 'block'}}
          border={1}
          borderColor={'green'}
        >
          <Grid size={12} sx={{ border: '1px solid purple' }}>
            <RoundedPicture />
          </Grid>
          <Grid size={12} sx={{ border: '1px solid purple' }}>
            <Typography variant="h3">Descripción</Typography>
          </Grid>
        </Grid>
        <Grid size={{xs:12, sm:8, md:9}} sx={{ border: '1px solid green' }}>
          <Typography variant="h1">size=8</Typography>
        </Grid>
      </Grid>
    )
}

export default HomeLayoutV2;
