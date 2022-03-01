import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default { store, persistor };
