// External
import { Grid } from '@mui/material';
import { useState } from 'react';

// Internal
import DesignTitle from '@/components/Design/DesignTitle';
import DesignComponentList from '@/components/Design/DesignComponentList';
import DesignComponentDetails from '@/components/Design/DesignComponentDetails';
import { defaultComponent } from '@/utils/tmp-back/components';

const DesignLayout = () => {
  const [component, setComponent] = useState(defaultComponent);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DesignTitle title={component?.name} />
      </Grid>
      <Grid item xs={3}>
        <DesignComponentList setComponent={setComponent} />
      </Grid>
      <Grid item xs={9}>
        <DesignComponentDetails component={component} />
      </Grid>
    </Grid>
  );
};

export default DesignLayout;
