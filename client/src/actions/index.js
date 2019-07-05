import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// CREATED ALL ACTION CREATORS SINCE WE KNOW WHAT RESPONSE WE ARE GETTING USING REST CONVENTIONS
// action creator to create a stream on api
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  // Using post method to create new streams using our formValues
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });

  // Programatic Navigation
  history.push("/");
};

// action creator to fetch a list of all streams on api
export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// action creator to fetch a stream on api
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// action creator to delete a stream on api
// NOTE: since no response therfore payload different
export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

// action creator to edit a stream on api
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};
