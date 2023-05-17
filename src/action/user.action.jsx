import axios from "axios";

export const USER_POSTS = "USER_POSTS";


export const userPost = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/currentUser").then((res) => {
      dispatch({ type: USER_POSTS, playload: res.data });
    });
  };
};

