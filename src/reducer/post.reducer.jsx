import {  ADD_POST, DELETE_POST, GET_POSTS } from "../action/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.playload;
    case ADD_POST:
      return [action.payload, ...state];
   
      case DELETE_POST:
        return state.filter(post => post.id != action.playload)

         default:
      return state;
  }
}
