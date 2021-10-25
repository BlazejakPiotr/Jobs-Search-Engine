import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

export const initialState = {
  favorites: {
    likes: [],
  },
  data: {
    data: [],
    error: false,
    isLoading: true,
  },
};

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(configureStore);

export { configureStore, persistor };
