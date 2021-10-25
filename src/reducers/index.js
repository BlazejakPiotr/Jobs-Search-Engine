import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVORITE": {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          likes: [...state.favorites.likes, action.payload],
        },
      };
    }
    case "REMOVE_JOB_FROM_FAVORITE": {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          likes: state.favorites.likes.filter(
            (like) => like._id !== action.payload._id
          ),
        },
      };
    }
    case "FETCH_JOBS": {
      return {
        ...state,
        data: {
          data: [...state.data.data, ...action.payload],
          isLoading: false,
        },
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        data: {
          isLoading: false,
          isError: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
