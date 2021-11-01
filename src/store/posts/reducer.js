import {
  FETCH_ALL,
  CREATE_POST,
  UPDATE_POST,
  SET_CURRENT_ID,
  RESET_CURRENT_ID,
} from "./actions";

const initialState = {
  allPosts: [],
  currentId: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return { ...state, allPosts: payload };
    case CREATE_POST:
      return { ...state, allPosts: [...state.allPosts, payload] };
    case UPDATE_POST:
      const updatedPostArray = state.allPosts.map((post) =>
        post._id === payload._id ? payload : post
      );

      return {
        ...state,
        allPosts: updatedPostArray,
        currentId: null,
      };

    case SET_CURRENT_ID:
      return { ...state, currentId: payload };
    case RESET_CURRENT_ID:
      return { ...state, currentId: null };
    default:
      return state;
  }
};
