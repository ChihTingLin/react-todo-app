import React from 'react';
import TodoApp from './todo/TodoApp';
import UserList from './user/UserList';
import HooksExample from './HooksExample';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ width: '800px', margin: '0 auto' }}>
        <TodoApp />
        <UserList />
        <HooksExample />
      </div >
    );
  }


}

export default App;
