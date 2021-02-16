import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { episodes } from '../../data';
import Aside from '../../UI/Aside';
import TableUI from '../../UI/TableUI';
import EpisodesFilter from './components/EpisodesFilter';

const EpisodesPage = () => {
  return (
    <>
      <Aside>
        <EpisodesFilter />
      </Aside>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Typography variant="h5"> Episodes :</Typography>
        </Box>
        <TableUI
          numRowsPerPage={25}
          numPage={episodes.info.page}
          count={episodes.info.count}
          rows={episodes.results}
          episode={true}
        />
      </Box>
    </>
  );
};

export default EpisodesPage;
