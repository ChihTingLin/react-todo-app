import React from 'react';
import TodoApp from './todo/TodoApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TodoApp />
      </div >
    );
  }


}

export default App;
