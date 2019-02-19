import React, { Component } from 'react';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer posts={this.state.posts} />
        
      </div>
    );
  }
}

export default App;