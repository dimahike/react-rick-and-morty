import {
  CHARACTER_LIST_FAIL,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_DETAILS_FAIL,
  CHARACTER_DETAILS_REQUEST,
  CHARACTER_DETAILS_SUCCESS,
} from '../constants/characterConstants';

export const characterList = (
  page = 1,
  nameFilter = '',
  speciesFilter = '',
  genderFilter = '',
  statusFilter = '',
) => async (dispatch) => {
  dispatch({ type: CHARACTER_LIST_REQUEST });

  let convertNewPage = page;
  if (page > 1) {
    convertNewPage = Math.ceil(page / 2);
  }

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${nameFilter}&species=${speciesFilter}&status=${statusFilter}&gender=${genderFilter}&page=${convertNewPage}`,
    );
    const json = await response.json();
    if (!response.ok) {
      dispatch({
        type: CHARACTER_LIST_FAIL,
        payload: {
          message: json.error,
        },
      });
      return;
    }

    dispatch({
      type: CHARACTER_LIST_SUCCESS,
      payload: {
        response: json,
        page: page,
      },
    });
  } catch (error) {
    dispatch({
      type: CHARACTER_LIST_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const characterDetails = (id) => async (dispatch) => {
  dispatch({ type: CHARACTER_DETAILS_REQUEST });

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = await response.json();
    if (!response.ok) {
      dispatch({
        type: CHARACTER_DETAILS_FAIL,
        payload: {
          message: json.error,
        },
      });
      return;
    }

    dispatch({
      type: CHARACTER_DETAILS_SUCCESS,
      payload: json,
    });
  } catch (error) {
    dispatch({
      type: CHARACTER_DETAILS_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
