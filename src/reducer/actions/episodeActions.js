import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_SUCCESS,
  EPISODE_LIST_FAIL,
} from '../constants/episodeConstants';

export const episodeList = (page = 1, name = '', season = 0) => async (dispatch) => {
  dispatch({ type: EPISODE_LIST_REQUEST });

  const convertPage = Math.floor((25 * page) / 20);

  const convertNumSeason =
    season !== 0
      ? season.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : '';

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?name=${name}&episode=S${convertNumSeason}&page=${convertPage}`,
    );

    const json = await response.json();

    if (!response.ok) {
      dispatch({
        type: EPISODE_LIST_FAIL,
        payload: {
          message: json.error,
        },
      });
      return;
    }

    if (convertPage === json.info.pages) {
      dispatch({
        type: EPISODE_LIST_SUCCESS,
        payload: {
          info: json.info,
          results: [json.results],
          convertPage: convertPage,
          page: page,
        },
      });
    } else if (convertPage > 0 && convertPage < json.info.pages) {
      const response2 = await fetch(
        `https://rickandmortyapi.com/api/episode?name=${convertNumSeason}&episode=S${convertNumSeason}&page=${
          page + 1
        }`,
      );
      const json2 = await response2.json();

      if (!response2.ok) {
        dispatch({
          type: EPISODE_LIST_SUCCESS,
          payload: {
            info: json.info,
            results: [json.results],

            convertPage: convertPage,
            page: page,
          },
        });
        return;
      }

      dispatch({
        type: EPISODE_LIST_SUCCESS,
        payload: {
          info: json.info,
          results: [json.results, json2.results],
          convertPage: convertPage,
          page: page,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: EPISODE_LIST_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
