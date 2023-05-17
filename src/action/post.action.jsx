import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPost = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/comments").then((res) => {
      dispatch({ type: GET_POSTS, playload: res.data });
    });
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/comments", data).then((res) => {
      dispatch({ type: GET_POSTS, playload: data });
    });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:3000/comments/${postId}` ).then((res) => {
      dispatch({ type: DELETE_POST, playload: postId});
    });
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    return axios.put(`http://localhost:3000/comments/${data.id}`, data ).then((res) => {
      dispatch({ type: EDIT_POST, playload: data});
    });
  };
};
