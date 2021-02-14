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
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
}));

const EpisodesFilter = () => {
  const classes = useStyles();
  const [name, setName] = useState('');

  const nameFieldHandler = (event, value) => {
    console.log('event', event.target.value);
    setName(event.target.value);
  };

  // const handleSelect = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  return (
    <>
      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Name :
        </Typography>
        <Box mt={2}>
          <TextField
            label="Enter species"
            placeholder="Find species... "
            multiline
            variant="outlined"
            value={name}
            onChange={nameFieldHandler}
          />
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" className={classes.leftGape}>
          Seasons :
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="All Seasons" className={classes.uppercase} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Season 1" className={classes.uppercase} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Season 2" className={classes.uppercase} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Season 3" className={classes.uppercase} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Season 4" className={classes.uppercase} />
          </ListItem>
        </List>
      </Box>

      <Box className={classes.input}>
        <Typography variant="h6" className={classes.leftGape}>
          Episodes :
        </Typography>
        <Box mt={2}>
          <FormControl>
            <NativeSelect
              // value={state.age}
              // onChange={handleChange}
              name="age"
              // className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'age' }}>
              <option value={0}>All</option>
              <option value={1}>Episod 1</option>
              <option value={2}>Episod 2</option>
              <option value={3}>Episod 3</option>
              <option value={4}>Episod 4</option>
            </NativeSelect>
            <FormHelperText>With visually hidden label</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default EpisodesFilter;
