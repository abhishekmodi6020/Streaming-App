import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      // dynamically adding key value pair to a new state object
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    // NOTE: all three same because we get same kind of response from api(see REST Response column)

    case DELETE_STREAM:
      // here action.payload itself is a ID
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
