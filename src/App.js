import Header from './UI/Header';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import EpisodesPage from './Pages/EpisodesPage';
import LocationsPage from './Pages/LocationsPage';
import WatchListPage from './Pages/WatchListPage';
import CharacterDetails from './Pages/CharacterDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
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
