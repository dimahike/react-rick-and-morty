import {
  CHARACTER_DETAILS_REQUEST,
  CHARACTER_DETAILS_RESET,
  CHARACTER_DETAILS_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
} from '../constants/characterConstants';

export const characterListReducer = (
  state = { loading: true, characters: [], info: {} },
  action,
) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return { loading: true };

    case CHARACTER_LIST_SUCCESS:
      let characters10;
      if (action.payload.page % 2 === 0) {
        characters10 = action.payload.response.results.slice(10, 20);
      } else {
        characters10 = action.payload.response.results.slice(0, 10);
      }
      const newSizePages = Math.ceil(action.payload.response.info.count / 10);
      action.payload.response.info.pages = newSizePages;

      action.payload.response.info.page = action.payload.page;
      delete action.payload.response.info.next;
      delete action.payload.response.info.prev;

      return { loading: false, characters: characters10, info: action.payload.response.info };

    case CHARACTER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const characterDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CHARACTER_DETAILS_REQUEST:
      return { loading: true };

    case CHARACTER_DETAILS_SUCCESS:
      return { loading: false, character: action.payload };

    case CHARACTER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CHARACTER_DETAILS_RESET:
      return {};

    default:
      return state;
  }
};
