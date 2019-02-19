import React from 'react';

const LikeSection = props => {
  return (
    <div className="like-section">

        <div className="like-icons">
            <i className="fa fa-heart" />
            <i className="fa fa-comment" />
        </div>

        <div className="likes">{props.likes} Likes</div>
        
    </div>
  );
};

export default LikeSection;