import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_SUCCESS,
  EPISODE_LIST_FAIL,
} from '../constants/episodeConstants';

export const episodeList = (page = 1, name = '', season = 0) => async (dispatch) => {
  dispatch({ type: EPISODE_LIST_REQUEST });

  const convertNumSeason =
    season !== 0
      ? season.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : '';

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?name=${name}&episode=S${convertNumSeason}&page=${page}`,
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

    const convertPages = Math.ceil(json.info.count / 25);

    if (page === convertPages) {
      dispatch({
        type: EPISODE_LIST_SUCCESS,
        payload: {
          info: json.info,
          results: [json.results],
          convertPages: convertPages,
        },
      });
    } else if (page > 0 && page < convertPages) {
      const response2 = await fetch(
        `https://rickandmortyapi.com/api/character?name=${convertNumSeason}&episode=S${convertNumSeason}&page=${
          page + 1
        }`,
      );
      const json2 = await response2.json();

      if (!response2.ok) {
        // console.log(json);
        dispatch({
          type: EPISODE_LIST_FAIL,
          payload: {
            message: json.error,
          },
        });
        return;
      }

      dispatch({
        type: EPISODE_LIST_SUCCESS,
        payload: {
          info: json.info,
          results: [json.results, json2.results],
          convertPages: convertPages,
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
