import {
  Box,
  FormControl,
  FormHelperText,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  NativeSelect,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  leftGape: {
    marginLeft: '25px',
    marginTop: '20px',
    fontWeight: 700,
  },
  input: {
    padding: '20px 25px',
  },
  uppercase: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
  },
}));

const LocationsFilter = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  const nameFieldHandler = (event, value) => {
    console.log('event', event.target.value);
    setName(event.target.value);
  };

  const typeFieldHandler = (event, value) => {
    console.log('event', event.target.value);
    setType(event.target.value);
  };

  const dimensionFieldHandler = (event, value) => {
    console.log('event', event.target.value);
    setDimension(event.target.value);
  };

  return (
    <>
      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Name :
        </Typography>
        <Box mt={2}>
          <TextField
            label="Enter location"
            placeholder="Find location... "
            multiline
            variant="outlined"
            value={name}
            onChange={nameFieldHandler}
          />
        </Box>
      </Box>
      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Type :
        </Typography>
        <Box mt={2}>
          <TextField
            label="Enter species"
            placeholder="Find species... "
            multiline
            variant="outlined"
            value={type}
            onChange={typeFieldHandler}
          />
        </Box>
      </Box>
      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Dimension :
        </Typography>
        <Box mt={2}>
          <TextField
            label="Enter species"
            placeholder="Find species... "
            multiline
            variant="outlined"
            value={dimension}
            onChange={dimensionFieldHandler}
          />
        </Box>
      </Box>
    </>
  );
};

export default LocationsFilter;
