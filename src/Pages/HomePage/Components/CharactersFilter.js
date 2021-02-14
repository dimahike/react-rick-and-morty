import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { genders, statuses } from '../../../data';

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

const CharactersFilter = () => {
  const classes = useStyles();
  const [species, setSpecies] = useState('');

  const onChangeTextFieldHandle = (event, value) => {
    console.log('event', event.target.value);
    setSpecies(event.target.value);
  };
  return (
    <>
      <Box>
        <Typography variant="h6" className={classes.leftGape}>
          Status :
        </Typography>
        <List>
          {statuses.map((status) => (
            <ListItem button key={status}>
              <ListItemText primary={status} className={classes.uppercase} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" className={classes.leftGape}>
          Gender :
        </Typography>
        <List>
          {genders.map((gender) => (
            <ListItem button key={gender}>
              <ListItemText primary={gender} className={classes.uppercase} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Species :
        </Typography>
        <Box mt={2}>
          <TextField
            label="Enter species"
            placeholder="Find species... "
            multiline
            variant="outlined"
            value={species}
            onChange={onChangeTextFieldHandle}
          />
        </Box>
      </Box>
    </>
  );
};

export default CharactersFilter;
