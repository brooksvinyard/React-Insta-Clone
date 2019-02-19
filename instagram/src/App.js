import React, { Component } from 'react';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  searchPosts = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
      return null;
    });
    this.setState({ searchPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBarContainer searchPosts={this.searchPosts} />
        <PostContainer 
        posts={this.state.searchPosts.length > 0 
          ? this.state.searchPosts 
          : this.state.posts} />
        
      </div>
    );
  }
}

export default App;