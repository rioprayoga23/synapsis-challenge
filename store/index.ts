import { configs } from "@/configs";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

import posts from "./posts/reducer";

const rootReducer = combineReducers({
  posts,
});

const isProduction = configs.NODE_ENV === "production";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["keyToken"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const initStore = () => {
  const store: any = configureStore({
    reducer: persistedReducer,
    devTools: isProduction ? false : true,
    middleware: (gdm) => gdm().concat(thunk),
  });
  store.__persistor = persistStore(store);
  return store;
};

export const store = createWrapper(initStore);

export type IRootState = ReturnType<typeof rootReducer>;
