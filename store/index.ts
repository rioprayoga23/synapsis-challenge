import { configs } from "@/configs";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { thunk } from "redux-thunk";

import modal from "./modal/reducer";

const rootReducer = combineReducers({
  modal,
});

const isProduction = configs.NODE_ENV === "production";

const initStore = () => {
  const store: any = configureStore({
    reducer: rootReducer,
    devTools: isProduction ? false : true,
    middleware: (gdm) => gdm().concat(thunk),
  });
  return store;
};

export const store = createWrapper(initStore);

export type IRootState = ReturnType<typeof rootReducer>;
