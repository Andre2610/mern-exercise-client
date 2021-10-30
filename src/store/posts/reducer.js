import { FETCH_ALL, CREATE_POST } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE_POST:
      return [...state, payload];
    default:
      return state;
  }
};
