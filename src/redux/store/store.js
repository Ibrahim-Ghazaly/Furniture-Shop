
import cartSlice from '../slices/cart-slice'
import userSlice from '../slices/user-slice'
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducerUser = persistReducer(persistConfig, userSlice);
const persistedReducerCartWishlist = persistReducer(persistConfig, cartSlice);


export const store = configureStore({
  reducer: {
    user: persistedReducerUser,
    cartWishList:persistedReducerCartWishlist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);