import styled from 'styled-components'
import React from 'react';

// Styled with Styled-Components
const PostHeaderWrapper = styled.div`
    display: flex;
    justify-content: left;
    padding: 10px;
    align-items: center;
    background-color: white;
`;
const PostThumb = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;
const PostUser = styled.div`
    margin-left: 10px;
    font-weight: 900;
`;


const PostHeader = props => {
    return (
        <PostHeaderWrapper >
            <PostThumb alt="user thumbnail" src={props.thumbnailUrl} />
            <PostUser>{props.username}</PostUser>
        </PostHeaderWrapper>
    );
};

export default PostHeader;