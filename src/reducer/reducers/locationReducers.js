import {
  LOCATION_LIST_FAIL,
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
} from '../constants/locationConstants';

export const locationListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case LOCATION_LIST_REQUEST:
      return { loading: true };

    case LOCATION_LIST_SUCCESS:
      return { loading: false, locations: action.payload.results, info: action.payload.info };

    case LOCATION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
