import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { locationList } from '../../reducer/actions/locationActions';
import Aside from '../../UI/Aside';
import TableUI from '../../UI/TableUI';
import LocationsFilter from './components/LocationsFilter';

const LocationsPage = () => {
  const dispatch = useDispatch();

  const { loading, locations, info, error } = useSelector((state) => state.locationList);

  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dimensionFilter, setDimension] = useState('');

  const [page, setPage] = useState(0);

  const filterHandler = (filter) => {
    switch (filter.type) {
      case 'name':
        return setNameFilter(filter.value);
      case 'type':
        return setTypeFilter(filter.value);
      case 'dimension':
        return setDimension(filter.value);

      default:
        return '';
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const numPage = 1;
    setPage(0);
    dispatch(locationList(numPage, nameFilter, typeFilter, dimensionFilter));
  }, [dispatch, nameFilter, typeFilter, dimensionFilter]);

  useEffect(() => {
    const numPage = page + 1;
    dispatch(locationList(numPage, nameFilter, typeFilter, dimensionFilter));
  }, [dispatch, page]);

  return (
    <>
      <Aside>
        <LocationsFilter filter={filterHandler} />
      </Aside>
      <Box>
        <Box display="flex" justifyContent="start" mb={1} ml={4}>
          <Typography variant="h5">Episodes :</Typography>
        </Box>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error.message}</h1>
        ) : (
          <TableUI
            handleChangePage={handleChangePage}
            numRowsPerPage={20}
            numPage={page}
            count={info.count}
            rows={locations}
            location={true}
          />
        )}
      </Box>
    </>
  );
};

export default LocationsPage;
