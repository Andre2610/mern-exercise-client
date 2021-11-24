import { API } from "../../config/constants";

export const FETCH_ALL = "FETCH_ALL";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SET_CURRENT_ID = "SET_CURRENT_ID";
export const RESET_CURRENT_ID = "RESET_CURRENT_ID";
export const DELETE_POST = "DELETE_POST";

const fetchPostsSuccess = (data) => {
  return { type: FETCH_ALL, payload: data };
};

const postCreatedSuccess = (data) => {
  return { type: CREATE_POST, payload: data };
};

const updatePostSuccess = (data) => {
  return { type: UPDATE_POST, payload: data };
};

const deletedPostSuccess = (id) => {
  return { type: DELETE_POST, payload: id };
};

export const setCurrentId = (data) => {
  return { type: SET_CURRENT_ID, payload: data };
};

export const resetCurrentId = () => {
  return { type: RESET_CURRENT_ID };
};

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await API.get(`/posts`);

    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const createPost = (data) => async (dispatch, getState) => {
  try {
    const token = getState().user.authData.token;
    const response = await API.post(
      `/posts`,
      { data },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    dispatch(postCreatedSuccess(response.data));
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const updatePost = (id, data) => async (dispatch, getState) => {
  try {
    const token = getState().user.authData.token;
    const response = await API.patch(
      `/posts/${id}`,
      { data },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    dispatch(updatePostSuccess(response.data));
  } catch (error) {
    console.log("Error", error);
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    const token = getState().user.authData.token;
    const response = await API.delete(`/posts/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch(deletedPostSuccess(id));
  } catch (error) {
    console.log("Error", error);
  }
};

export const likePost = (id) => async (dispatch, getState) => {
  try {
    const token = getState().user.authData.token;
    const response = await API.patch(
      `/posts/${id}/like-post`,
      {},
      { headers: { authorization: `Bearer ${token}` } }
    );

    dispatch(updatePostSuccess(response.data));
  } catch (error) {
    console.log("Error", error);
  }
};
