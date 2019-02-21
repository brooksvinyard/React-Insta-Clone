import styled from 'styled-components'
import React from 'react';

// Styled with Styled-Components
const LikeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 2px;
`;
const LikeIconWrapper = styled.div`
    font-size: 27px;
`;
const LikeMe = styled.i`
    display: inline-block;
    height: 35px;
    width: 51px;
    margin: 0px;
`;
const Likes = styled.div`
    font-weight: 500;
`;

const LikeSection = props => {
  return (
    <LikeWrapper>

        <LikeIconWrapper>
            <LikeMe onClick={props.likePost} className="fa fa-heart" />
            <LikeMe className="fa fa-comment" />
        </LikeIconWrapper>

        <Likes>{props.likes} Likes</Likes>
        
    </LikeWrapper>
  );
};

export default LikeSection;