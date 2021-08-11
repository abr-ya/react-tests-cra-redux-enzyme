import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const CommentBox = ({saveComment, fetchComments}) => {
  const [comment, setComment] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    // console.log('send', comment);
    saveComment(comment);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
