import styled from 'styled-components'
import React from 'react';
import Post from './Post';

// Styled with Styled-Components
const PostWrapper = styled.div`
  height: 500px;
  width: 600px;
  margin: 5px auto;
`;


const PostContainer = props => {
  return (
    <PostWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostWrapper>
  );
};

export default PostContainer;