import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
// import './App.css';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login'


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <PostsPage />
    );
  }
}

// export default App;
export default authenticate(App)(Login)