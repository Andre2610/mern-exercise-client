import { API } from "../../config/constants";

export const GOOGLE_AUTH = "GOOGLE_AUTH";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const googleAuthSuccess = (data) => {
  return {
    type: GOOGLE_AUTH,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};

export const signUp = (data, history) => async (dispatch, getState) => {
  try {
    const response = await API.post(`/users/signup`, { data });
    console.log("Response", response);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const login = (data, history) => async (dispatch, getState) => {
  try {
    const response = await API.post(`/users/login`);
  } catch (error) {
    console.log("Error", error.message);
  }
};
