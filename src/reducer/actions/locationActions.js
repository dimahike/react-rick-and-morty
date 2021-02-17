import {
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
  LOCATION_LIST_FAIL,
} from '../constants/locationConstants.js';

export const locationList = (page = 1, name = '', type = '', dimension = '') => async (
  dispatch,
) => {
  dispatch({ type: LOCATION_LIST_REQUEST });

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?name=${name}&type=${type}&dimension=${dimension}&page=${page}`,
    );
    const json = await response.json();
    if (!response.ok) {
      dispatch({
        type: LOCATION_LIST_FAIL,
        payload: {
          message: json.error,
        },
      });
      return;
    }

    dispatch({
      type: LOCATION_LIST_SUCCESS,
      payload: json,
    });
  } catch (error) {
    dispatch({
      type: LOCATION_LIST_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
