import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// Styled with Styled-Components
const CommentDiv = styled.div`
    text-align: left;
    padding: 2px;
    margin-left: 10px;
`;

const CommentUsername = styled.span`
    font-weight: 500;
    font-size: 16px;
`;
  
const CommentText = styled.span`
    font-weight: 300;
    font-size: 18px;
`;


const Comment = props => {
  return (
    <CommentDiv>
        <CommentUsername >{props.comment.username} </CommentUsername>
      <CommentText >{props.comment.text}</CommentText>{' '}
      
    </CommentDiv>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;