import { SET_PROFILE } from "../actionTypes";

const user = {
  profile: {},
  loading: true,
};

export default function ProfileReducers(state = user, action) {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload, loading: false };

    default:
      return user;
  }
}
