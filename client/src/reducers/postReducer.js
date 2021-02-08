/* eslint-disable */
import { 
    FETCH_USER_POSTS, 
    POST_TO_USER,
    FETCH_ALL_POSTS,
    POST_TO_ALL } from '../actions/types';

const initialState = {
  fetchUsersPosts: [],
  postToUser: {},
  fetchAllPosts : [],
  postToAll: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ...state,
        fetchUsersPosts: action.payload
      };
    case POST_TO_USER:
      return {
        ...state,
        postToUser: action.payload
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        fetchAllPosts: action.payload
      };
    case POST_TO_ALL:
      return {
        ...state,
        postToAll: action.payload
      };
    default:
      return state;
  }
}