// External
import { Grid } from '@mui/material';
import { useState } from 'react';

// Internal
import DesignComponentDetails from '@/components/Design/DesignComponentDetails';
import DesignComponentList from '@/components/Design/DesignComponentList';
import DesignTitle from '@/components/Design/DesignTitle';
import { defaultComponent } from '@/utils/tmp-back/components';

const DesignLayout = () => {
  const [component, setComponent] = useState(defaultComponent);

  return (
    <Grid
      container
      style={{
        backgroundImage: 'url(/public/design-page-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid item xs={12}>
        <DesignTitle title={component?.name} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <DesignComponentList setComponent={setComponent} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <DesignComponentDetails component={component} />
      </Grid>
    </Grid>
  );
};

export default DesignLayout;
