import { FETCH_ALL, CREATE_POST } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return state;
    case CREATE_POST:
      return state;
    default:
      return state;
  }
};
