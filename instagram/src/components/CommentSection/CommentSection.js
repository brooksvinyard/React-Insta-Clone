import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: []
    };
  }

  addNewComment = e => {
    // Create a function in CommentSection.js called addNewComment that takes in 
    // an event and an index number. The function will add the comment that 
    // is on the event object to the post that is at that index number.
    // username: ,
    // text:
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'brooks' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }

  handleChanges = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          comment={this.state.comment}
          addNewComment={this.addNewComment} 
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;