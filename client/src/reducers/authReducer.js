import { 
    USER_SIGNUP, 
    USER_LOGIN,
    USER_LOGOUT,
    USER_AUTHENTICATE  } from '../actions/types';

const initialState = {
  user: [],            //the response i am fetching from the backend
  user: {}             //the response that i am adding to the backend
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        recipes: action.payload
      };
    case USER_SIGNUP:
      return {
        ...state,
        recipe: action.payload
      };
    case USER_LOGOUT:
      return {
        ...state,
        recipes: action.payload
      };
    case USER_AUTHENTICATE:
      return {
        ...state,
        recipe: action.payload
      };
    default:
      return state;
  }
}