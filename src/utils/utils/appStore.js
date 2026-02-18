import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import { RESET_STORE } from "./actions";

const appReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  gpt: gptReducer,
  config: configReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
