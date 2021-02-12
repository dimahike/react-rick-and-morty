import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv';
import ExploreIcon from '@material-ui/icons/Explore';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  button: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
  },

  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Header = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  // const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <FilterListIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={clsx(classes.title)}>
            R&M {matches ? 'true' : 'false'}
          </Typography>

          {matches ? (
            <>
              <Link to="/" className={classes.button}>
                <Button color="inherit">CHARACTERS</Button>
              </Link>
              <Link to="/episodes" className={classes.button}>
                <Button color="inherit">EPISODES</Button>
              </Link>
              <Link to="/locations" className={classes.button}>
                <Button color="inherit">LOCATIONS</Button>
              </Link>
              <Link to="/watchlist" className={classes.button}>
                <Button color="inherit">WATCH LIST</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <IconButton className={classes.button}>
                  <i className="fas fa-user-astronaut"></i>
                </IconButton>
              </Link>
              <Link to="/episodes">
                <IconButton className={classes.button}>
                  <TvIcon />
                </IconButton>
              </Link>
              <Link to="/locations">
                <IconButton className={classes.button}>
                  <ExploreIcon />
                </IconButton>
              </Link>
              <Link to="/watchlist">
                <IconButton className={classes.button}>
                  <QueuePlayNextIcon />
                </IconButton>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
