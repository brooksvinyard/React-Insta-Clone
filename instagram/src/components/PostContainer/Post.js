import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import './Post.css';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={props.post.likes} />
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;