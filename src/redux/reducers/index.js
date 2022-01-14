import { combineReducers } from "redux";
import Auth from "./Auth";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
  blacklist: [],
};

const rootReducers = combineReducers({
  auth: Auth,
});

const reducers = persistReducer(persistConfig, rootReducers);
export default reducers;
