import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { characterDetailsReducer, characterListReducer } from './reducers/characterReducers';
import { episodeListReducer } from './reducers/episodeReducers';
import { drawerReducer } from './reducers/headerReducers';

const initialState = {
  drawer: false,
};

const reducer = combineReducers({
  drawer: drawerReducer,
  characterList: characterListReducer,
  characterDetails: characterDetailsReducer,
  episodeList: episodeListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
