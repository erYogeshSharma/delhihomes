import * as actionType from "../actionTypes.js";
import isEmpty from "../../validator/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH:
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.result,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      return {
        isAuthenticated: false,
        user: {},
      };
    case actionType.GOOGLE_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload?.local }));
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.data,
      };

    default:
      return state;
  }
};

export default authReducer;
