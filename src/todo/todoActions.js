const CHANGE_INPUT = 'CHANGE_INPUT';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const changeInput = (value) => ({
  type: CHANGE_INPUT,
  value
})

const addTodo = () => ({
  type: ADD_TODO
})

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

const actionCreators = {
  changeInput,
  addTodo,
  deleteTodo,
  toggleTodo
}

export const types = {
  CHANGE_INPUT,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
}

export default actionCreators