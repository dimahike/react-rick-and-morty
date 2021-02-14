import {
  Avatar,
  Box,
  Divider,
  FormControl,
  FormHelperText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  NativeSelect,
  TextField,
  Typography,
} from '@material-ui/core';
import TvIcon from '@material-ui/icons/Tv';
import ExploreIcon from '@material-ui/icons/Explore';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import React, { useState } from 'react';

import poster from '../../../images/poster.jpg';

const drawerWidth = 240;

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
  posterImage: {
    maxWidth: drawerWidth,
    top: 0,
  },
}));

const DetailsSideBar = () => {
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
      <Box>
        <Box mb={2}>
          <img src={poster} alt="Rick And Morty" className={classes.posterImage} />
          <Typography variant="h6" className={classes.leftGape}>
            Rick And Morty
          </Typography>
          <Typography variant="subtitle1" className={classes.leftGape}>
            Seeasons: 4
          </Typography>
          <Typography variant="subtitle1" className={classes.leftGape}>
            Episodes: 41
          </Typography>
        </Box>
        <Divider />
        <Typography variant="h6" className={classes.leftGape}>
          Details :
        </Typography>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TvIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Watched" secondary="10 Episodes" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <QueuePlayNextIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Wish To Watch" secondary="20 Episodes" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default DetailsSideBar;
