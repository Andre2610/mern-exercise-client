import axios from "axios";
import { API_URL } from "../../config/constants";

export const FETCH_ALL = "FETCH_ALL";
export const CREATE_POST = "CREATE_POST";

const fetchPostsSuccess = (data) => {
  return { type: FETCH_ALL, payload: data };
};

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);

    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};
