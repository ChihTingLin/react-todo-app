import { types } from './todoActions';

const initialState = {
  input: '',
  todoMap: {},
  index: -1
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return {
        ...state
      }
    case types.ADD_TODO:
      return {
        ...state
      }
    case types.DELETE_TODO:
      return {
        ...state
      }
    case types.TOGGLE_TODO:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer