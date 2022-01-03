import { SET_ERRORS, CLEAR_ERRORS } from "../actionTypes";

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return { ...action.payload };
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
