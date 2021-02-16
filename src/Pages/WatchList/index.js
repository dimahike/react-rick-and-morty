import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  makeStyles,
  NativeSelect,
  Typography,
} from '@material-ui/core';

import { watchlist } from '../../data';
import Aside from '../../UI/Aside';
import DetailsSideBar from './components/DetailsSideBar';
import AdderToList from './components/AdderToList';
import WatchList from './components/WatchList';

const WatchListPage = () => {
  return (
    <>
      <Aside>
        <DetailsSideBar />
      </Aside>
      <AdderToList />

      <Box mb={1} ml={{ xs: 0, sm: 0, md: 4 }}>
        <WatchList list={watchlist} />
      </Box>
    </>
  );
};

export default WatchListPage;
