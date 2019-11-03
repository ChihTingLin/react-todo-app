import { FETCH_USER_LIST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from './userActions'
import * as types from './userActions'

const initialState = {
  userList: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LIST:
    case FETCH_USER_LIST_SUCCESS:
    case FETCH_USER_LIST_FAILURE:
    default:
      return state

  }
}

export default reducer