import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  makeStyles,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Aside from '../../UI/Aside';
import DetailsSideBar from './components/DetailsSideBar';

const useStyles = makeStyles((theme) => ({
  adderEpisodes: {},
}));

const WatchListPage = () => {
  const classes = useStyles();
  return (
    <>
      <Aside>
        <DetailsSideBar />
      </Aside>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Box>
            <Typography variant="h5"> Add TV-Episode to Wish List :</Typography>
          </Box>
        </Box>
        <Box display="flex" mt={3} mb={4}>
          <Box mx={2}>
            <Typography variant="h6">Choose </Typography>
          </Box>
          <Box mx={2}>
            <FormControl>
              <NativeSelect
                // value={state.age}
                // onChange={handleChange}
                name="age"
                // className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}>
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
              add to wish list
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Box>
            <Typography variant="h5"> Watch List :</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WatchListPage;
