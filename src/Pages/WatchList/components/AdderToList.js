import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import React from 'react';

const AdderToList = () => {
  return (
    <Box mb={5} ml={4}>
      <Box>
        <Typography variant="h5"> Add TV-Episode to Wish List :</Typography>
      </Box>
      <Box display="flex" mt={3} mb={4}>
        <Box mx={2}>
          <Typography variant="h6">Choose </Typography>
        </Box>
        <Box mx={2}>
          <FormControl>
            <NativeSelect name="age" inputProps={{ 'aria-label': 'age' }}>
              <option value="">None</option>
              <option value={1}>Episode 1</option>
              <option value={2}>Episode 2</option>
              <option value={3}>Episode 3</option>
              <option value={4}>Episode 4</option>
            </NativeSelect>
            <FormHelperText>Choose an episode</FormHelperText>
          </FormControl>
        </Box>
        <Box mx={2}>
          <Button variant="contained" color="primary" disabled>
            add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdderToList;
