import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import './Post.css';

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes,
      };
    }

    likePost = e => {
        this.setState({likes: this.props.post.likes++})
    };
  render() {
      return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.props.post.imageUrl}
        />
      </div>
      <LikeSection likes={this.props.post.likes} likePost={this.likePost}/>
      <CommentSection comments={this.props.post.comments} />
    </div>
  )};
};

export default Post;