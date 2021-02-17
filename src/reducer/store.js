import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { characterDetailsReducer, characterListReducer } from './reducers/characterReducers';
import { episodeListReducer } from './reducers/episodeReducers';
import { drawerReducer } from './reducers/headerReducers';
import { locationListReducer } from './reducers/locationReducers';
import { watchListReducer } from './reducers/watchListReducers';

const initialState = {
  drawer: false,
  watchList: {
    episodes: localStorage.getItem('episodes') ? JSON.parse(localStorage.getItem('episodes')) : [],
    // watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : {},
  },
};
localStorage.getItem('watchList');
const reducer = combineReducers({
  drawer: drawerReducer,
  characterList: characterListReducer,
  characterDetails: characterDetailsReducer,
  episodeList: episodeListReducer,
  locationList: locationListReducer,
  watchList: watchListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
