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

      let episodes;

      if (action.payload.results.length === 2) {
        const originalSizePage = 20;
        const newSizePage = 25;
        const sizeSlice = (newSizePage - originalSizePage) * (action.payload.convertPage - 1);

        let episodesRequest1;
        let episodesRequest2;
        if (action.payload.convertPage === 1) {
          episodesRequest1 = action.payload.results[0].slice(0, 20);
          episodesRequest2 = action.payload.results[1].slice(0, 5);
        } else {
          episodesRequest1 = action.payload.results[0].slice(sizeSlice, 20);
          episodesRequest2 = action.payload.results[1].slice(0, sizeSlice);
        }
        const unitEpisodes25 = episodesRequest1.concat(episodesRequest2);
        episodes = unitEpisodes25;
      } else {
        episodes = [].concat(action.payload.results[0]);
      }

      return {
        loading: false,
        info: {
          count: action.payload.info.count,
          page: action.payload.page,
        },
        episodes: episodes,
      };

    case EPISODE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
