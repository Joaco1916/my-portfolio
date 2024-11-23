// External
import { Box, List, ListItem, ListItemText } from '@mui/material';

// Internal
import { components } from '@/utils/tmp-back/components';

const ComponentList = ({ setComponent }) => {
  return (
    <Box margin={2} padding={2} border={'1px solid green'}>
      <List>
        {components.map((component) => (
          <ListItem key={component.id} onClick={() => setComponent(component)}>
            <ListItemText primary={component.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ComponentList;
