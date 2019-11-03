import React from 'react';
import TodoList from './TodoList'
import { connect } from 'react-redux';
import actionCreators from './todoActions';

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', todoMap: {}, index: 0 }
  }

  onChangeInput = (e) => {
    const value = e.target.value;
    // this.setState({ input: value })
    this.props.dispatch(actionCreators.changeInput(value))
  }

  onSubmitTodo = () => {
    // const { input, todoMap, index } = this.state
    // if (!input.trim()) return
    // const todo = {
    //   isCompleted: false,
    //   title: input,
    //   id: index
    // }
    // this.setState({
    //   todoMap: { ...todoMap, [index]: todo },
    //   input: '',
    //   index: index + 1
    // })
    this.props.dispatch(actionCreators.addTodo())
  }

  onChangeChecked = (id) => {
    // const { todoMap } = this.state;
    // const newTodo = Object.assign({}, todoMap)
    // newTodo[id] = Object.assign({}, todoMap[id])
    // newTodo[id].isCompleted = !newTodo[id].isCompleted
    // this.setState({
    //   todoMap: {
    //     ...todoMap,
    //     [id]: {
    //       ...todoMap[id],
    //       isCompleted: !todoMap[id].isCompleted
    //     }
    //   }
    // })
    this.props.dispatch(actionCreators.toggleTodo(id))
  }

  onDeleteTodo = (id) => {
    // const { todoMap } = this.state;
    // const newTodo = { ...todoMap }
    // delete newTodo[id]
    // this.setState({ todoMap: newTodo })
    this.props.dispatch(actionCreators.deleteTodo(id))
  }

  render() {
    // const { todoMap } = this.state;
    const { input, todoMap } = this.props.todo;

    return (
      <div style={{ height: '100%', margin: '50px auto', position: 'relative' }}>
        <div style={{ marginBottom: '10px' }} className="input-group">
          <input
            type="text"
            value={input}
            onChange={this.onChangeInput}
            className="form-control"
            placeholder="Add a todo item"
          />
          <button
            onClick={this.onSubmitTodo}
            className="btn btn-info"
          >
            Submit
          </button>
        </div>
        <TodoList
          todoMap={todoMap}
          onChangeChecked={this.onChangeChecked}
          onDeleteTodo={this.onDeleteTodo}
        />

      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
})

export default connect(mapStateToProps)(TodoApp);
