import { USER_POSTS } from "../action/user.action";

const initialState = {}

export default function userReducer(state=initialState, action){
  switch(action.type){
    case USER_POSTS:
        return action.playload;
        default:
            return state;
  }
}