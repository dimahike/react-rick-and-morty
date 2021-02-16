import {
  EPISODE_LIST_FAIL,
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_SUCCESS,
} from '../constants/episodeConstants.js';

export const episodeListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case EPISODE_LIST_REQUEST:
      return { loading: true };

    case EPISODE_LIST_SUCCESS:
      action.payload.info.pages = action.payload.convertPages;

      console.log('reducer episode', action.payload);

      let episodes;

      if (action.payload.results.length === 2) {
        const episodes5 = action.payload.results[1].slice(0, 5);
        const unitEpisodes25 = action.payload.results[0].concat(episodes5);
        episodes = unitEpisodes25;
      } else {
        episodes = [].concat(action.payload.results[0]);
      }

      return {
        loading: false,
        info: {
          count: 41,
          pages: action.payload.convertPages,
        },
        episodes: episodes,
      };

    case EPISODE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
