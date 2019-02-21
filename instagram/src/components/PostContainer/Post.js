import styled from 'styled-components'
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';

// Styled with Styled-Components
const SinglePost = styled.div`
    border: 1px solid #d3d3d3;
    margin: 15px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`;
const PostImage = styled.img`
    height: 100%;
    width: 100%;
`;

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
    <SinglePost>
        <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
        />
      
        <PostImage alt="post" src={this.props.post.imageUrl} />

        <LikeSection likes={this.props.post.likes} likePost={this.likePost}/>
        
        <CommentSection comments={this.props.post.comments} />
    </SinglePost>
  )};
};

export default Post;