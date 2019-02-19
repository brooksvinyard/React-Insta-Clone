import React from 'react';

const CommentInput = props => {
    // console.log(props)

    return (
        <form onSubmit={props.addNewComment} className="comment-form">
            <input
                type="text"
                placeholder="Add comment... "
                value={props.comment}
                onChange={props.handleChanges}
            />
        </form>
    );
};

export default CommentInput;

