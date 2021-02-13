import { Box, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import React from 'react';
import CardUI from './Components/CardUI';
import Filter from '../../UI/Filter';
import CharactersFilter from './Components/CharactersFilter';

const useStyles = makeStyles((theme) => ({
  maxWidth: {
    maxWidth: '1250px',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('720'));
  const handleChange = (event, value) => {
    // setPage(value);
    console.log('pagination', value);
  };

  return (
    <>
      <Filter>
        <CharactersFilter />
      </Filter>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Typography variant="h5">Chatacters :</Typography>
        </Box>
        <Box flexGrow={3} className={classes.maxWidth}>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
            <Box display="flex" justifyContent="center" m={[1, 3]}>
              <CardUI />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={11}
              defaultPage={6}
              siblingCount={matches ? 1 : 0}
              onChange={handleChange}
            />{' '}
            {/* Default ranges */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
