import { GOOGLE_AUTH, LOG_OUT } from "./actions";

const initialState = {
  authData: JSON.parse(localStorage.getItem("profile")) || null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GOOGLE_AUTH:
      localStorage.setItem("profile", JSON.stringify(payload));

      return { ...state, authData: { ...payload } };

    case LOG_OUT:
      localStorage.clear();
      return { authData: null };
    default:
      return state;
  }
};
