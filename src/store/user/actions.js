export const GOOGLE_AUTH = "GOOGLE_AUTH";
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
