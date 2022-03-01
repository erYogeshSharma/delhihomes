import { combineReducers } from "redux";
import auth from "./auth";
import errorReducer from "./errorReducers";
import messageReducer from "./messageReducers";
import profileReducer from "./profileReducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  auth,
  errors: errorReducer,
  userProfile: profileReducer,
  message: messageReducer,
});

export default persistReducer(persistConfig, rootReducer);
