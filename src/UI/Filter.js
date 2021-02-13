import React from 'react';
import { Box, makeStyles, SwipeableDrawer, useMediaQuery, useTheme } from '@material-ui/core';
import CharactersFilter from '../Pages/HomePage/Components/CharactersFilter';
import { useDispatch, useSelector } from 'react-redux';
import { drawer as drawerAction } from '../reducer/actions/headerActions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    paddingTop: '15px',
  },
  aside: {
    width: drawerWidth,
    top: '100px',
    left: '15px',
  },
}));

const Filter = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(720));
  const drawer = useSelector((state) => state.drawer);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch(drawerAction(false));
    // setOpen(open);
  };
  return (
    <>
      {matches ? (
        <Box className={classes.filter}>
          <Box position={['block', 'absolute']} className={classes.aside}>
            {props.children}
          </Box>
        </Box>
      ) : (
        <SwipeableDrawer
          anchor="left"
          open={drawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}>
          <Box className={classes.drawer}>{props.children}</Box>
        </SwipeableDrawer>
      )}
    </>
  );
};

export default Filter;
