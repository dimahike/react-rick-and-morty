import { Box, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import React, { useEffect, useState } from 'react';
import CardUI from '../../UI/CardUI';
import Aside from '../../UI/Aside';
import CharactersFilter from './components/CharactersFilter';
// import { characters } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { characterList } from '../../reducer/actions/characterActtions';

const useStyles = makeStyles((theme) => ({
  maxWidth: {
    maxWidth: '1250px',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('720'));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const { loading, characters, info, error } = useSelector((state) => state.characterList);
  const [numPage, setNumPage] = useState(1);

  const handleChange = (event, value) => {
    setNumPage(value);
  };

  const filterHandler = (filter) => {
    switch (filter.type) {
      case 'name':
        return setNameFilter(filter.value);
      case 'species':
        return setSpeciesFilter(filter.value);
      case 'gender':
        return setGenderFilter(filter.value);
      case 'status':
        return setStatusFilter(filter.value);

      default:
        return '';
    }
  };

  useEffect(() => {
    setNumPage(1);
    dispatch(characterList(numPage, nameFilter, speciesFilter, genderFilter, statusFilter));
  }, [dispatch, numPage, nameFilter, speciesFilter, genderFilter, statusFilter]);

  return (
    <>
      <Aside>
        <CharactersFilter filter={filterHandler} />
      </Aside>

      <Box display="flex" justifyContent="center">
        <Box>
          <Box display="flex" justifyContent="start" mb={1} ml={4}>
            <Typography variant="h5">Chatacters ({info && info.count && info.count}) :</Typography>
          </Box>
          <Box display="flex" justifyContent="center" flexWrap="wrap" className={classes.maxWidth}>
            {loading ? (
              <h1>Loading</h1>
            ) : error ? (
              <h1>{error.message}Error</h1>
            ) : (
              characters.map((character) => (
                <Box key={character.id} display="flex" justifyContent="center" m={[1, 3]}>
                  {} <CardUI character={character} />
                </Box>
              ))
            )}
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={info && info.pages ? info.pages : 1}
              defaultPage={1}
              siblingCount={matches ? 1 : 0}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
