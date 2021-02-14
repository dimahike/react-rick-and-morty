import Header from './UI/Header';
import React from 'react';
import clsx from 'clsx';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import EpisodesPage from './Pages/EpisodesPage';
import LocationsPage from './Pages/LocationsPage';
import WatchListPage from './Pages/WatchList';
import CharacterDetails from './Pages/CharacterDetails';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
    marginTop: '100px',
    [theme.breakpoints.down('720')]: {
      marginLeft: 0,
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    paddingTop: '15px',
  },
  aside: {
    width: drawerWidth,
    top: '100px',
    left: '15px',
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(720));

  return (
    <div className={classes.root}>
      <header>
        <Header />
      </header>

      {/* {matches ? (
        <Box className={classes.filter}>
          <Box position={['block', 'absolute']} className={classes.aside}>
            <CharactersFilter />
          </Box>
        </Box>
      ) : (
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}>
          <Box className={classes.drawer}>
            <CharactersFilter />
          </Box>
        </SwipeableDrawer>
      )} */}

      <main className={clsx(classes.content)}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/episodes" component={EpisodesPage} exact />
          <Route path="/locations" component={LocationsPage} exact />
          <Route path="/watchlist" component={WatchListPage} exact />
          <Route path="/character/:id" component={CharacterDetails} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
