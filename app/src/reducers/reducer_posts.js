import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST, TEST_AUTH } from "../actions";

let INIT_STATE = {
  data: []
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case DELETE_POST:
      // return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return {
        data: action.payload.data
      }
    case CREATE_POST:
      return {
        created_post: action.payload
      }
    case TEST_AUTH:
      return {
        test_auth: action.payload
      }
    default:
      return state;
  }
}
