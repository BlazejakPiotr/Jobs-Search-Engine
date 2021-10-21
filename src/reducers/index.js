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
    default:
      return state;
  }
};

export default mainReducer;
