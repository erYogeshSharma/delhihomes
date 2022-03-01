import { CLEAR_MESSAGE, SET_ERRORS, SET_MESSAGE, SET_PROFILE } from "../actionTypes";

import * as api from "../../api/index.js";

export const getProfile = (email) => async (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGE,
  });
  try {
    const { data } = await api.getProfile(email);

    dispatch({
      type: SET_PROFILE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response,
    });
  }
};

export const updateProfile = (userProfile, id, navigate) => async (dispatch) => {
  console.log(id);
  dispatch({
    type: CLEAR_MESSAGE,
  });
  try {
    const profile = await api.updateProfile(id, userProfile);
    console.log(profile);
    dispatch({
      type: SET_PROFILE,
      payload: profile.data,
    });
    dispatch({ type: SET_MESSAGE, payload: "Updated seccesfully" });
    dispatch({ type: CLEAR_MESSAGE });
    navigate("/home");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data,
    });
  }
};
