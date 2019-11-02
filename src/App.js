import React from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', todos: [], index: 0 }
  }

  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState({ input: value })
  }

  onSubmitTodo = () => {
    const { input, todos, index } = this.state
    if (!input.trim()) return
    const todo = {
      isCompleted: false,
      title: input,
      id: index
    }
    this.setState({
      todos: [...todos, todo],
      input: '',
      index: index + 1
    })
  }

  onChangeChecked = (item) => {
    const { todos } = this.state;
    const idx = todos.findIndex(i => i.id === item.id);
    const newItem = {
      ...todos[idx],
      isCompleted: !todos[idx].isCompleted,
    }
    const newTodos = [...todos]
    newTodos[idx] = newItem;
    this.setState({ todos: newTodos });
  }

  onDeleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(i => id !== i.id)
    })
  }

  render() {
    const style = {
      padding: '10px',
      borderRadius: '25px',
      border: 'none',
      marginRight: '20px'
    }
    const { input, todos } = this.state;

    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px' }}>
          <input
            type="text"
            style={style}
            value={input}
            onChange={this.onChangeInput}
          />
          <button style={style} onClick={this.onSubmitTodo}>
            Submit
          </button>
        </div>
        <TodoList
          todos={todos}
          onChangeChecked={this.onChangeChecked}
          onDeleteTodo={this.onDeleteTodo}
        />

      </div >
    );
  }


}

export default App;
