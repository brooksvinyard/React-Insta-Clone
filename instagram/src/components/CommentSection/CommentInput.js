import React from 'react';
import styled from 'styled-components'

// Styled with Styled-Components
const CommentInputForm = styled.input`
    margin: 10px 3%;
    width: 94%;
    height: 50px;
    font-size: 18px;
    border: none;
    border-top: 1px solid #d3d3d3;
`;

const CommentInput = props => {
    // console.log(props)

    return (
        <form onSubmit={props.addNewComment}>
            <CommentInputForm
                type="text"
                placeholder="Add comment... "
                value={props.comment}
                onChange={props.handleChanges}
            />
        </form>
    );
};

export default CommentInput;

