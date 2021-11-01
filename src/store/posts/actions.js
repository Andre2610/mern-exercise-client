import axios from "axios";
import { API_URL } from "../../config/constants";

export const FETCH_ALL = "FETCH_ALL";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SET_CURRENT_ID = "SET_CURRENT_ID";
export const RESET_CURRENT_ID = "RESET_CURRENT_ID";

const fetchPostsSuccess = (data) => {
  return { type: FETCH_ALL, payload: data };
};

const postCreatedSuccess = (data) => {
  return { type: CREATE_POST, payload: data };
};

const updatePostSuccess = (data) => {
  return { type: UPDATE_POST, payload: data };
};

export const setCurrentId = (data) => {
  return { type: SET_CURRENT_ID, payload: data };
};

export const resetCurrentId = () => {
  return { type: RESET_CURRENT_ID };
};

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);

    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const createPost = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, { data });

    dispatch(postCreatedSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const updatePost = (id, data) => async (dispatch, getState) => {
  try {
    const response = await axios.patch(`${API_URL}/posts/${id}`, { data });

    dispatch(updatePostSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};
