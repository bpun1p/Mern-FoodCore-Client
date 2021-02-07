import { 
    FETCH_USER_POSTS, 
    POST_TO_USER,
    FETCH_ALL_POSTS,
    POST_TO_ALL  } from '../actions/types';

const initialState = {
  recipes: [],            //the post i am fetching from the backend
  recipe: {}              //the post that i am adding to the backend
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ...state,
        recipes: action.payload
      };
    case POST_TO_USER:
      return {
        ...state,
        recipe: action.payload
      };
    case FETCH_ALL_POSTS:
    return {
        ...state,
        recipes: action.payload
    };
    case POST_TO_ALL:
    return {
        ...state,
        recipe: action.payload
    };
    default:
      return state;
  }
}