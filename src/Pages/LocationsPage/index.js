import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { locations, rows } from '../../data';
import Aside from '../../UI/Aside';
import TableUI from '../../UI/TableUI';
import LocationsFilter from './components/LocationsFilter';

const LocationsPage = () => {
  return (
    <>
      <Aside>
        <LocationsFilter />
      </Aside>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Typography variant="h5"> Episodes :</Typography>
        </Box>
        <TableUI
          numRowsPerPage={20}
          numPage={locations.page}
          count={locations.info.count}
          rows={locations.results}
          location={true}
        />
      </Box>
    </>
  );
};

export default LocationsPage;
