import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers";

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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
