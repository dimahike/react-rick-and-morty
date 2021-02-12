import Header from './UI/Header';
import React from 'react';
import clsx from 'clsx';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import EpisodesPage from './Pages/EpisodesPage';
import LocationsPage from './Pages/LocationsPage';
import WatchListPage from './Pages/WatchList';
import CharacterDetails from './Pages/CharacterDetails';
import DrawerUI from './UI/DrawerUI';
import { makeStyles } from '@material-ui/core';

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
    // marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <header>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      </header>
      <DrawerUI open={open} closeDrawer={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
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
