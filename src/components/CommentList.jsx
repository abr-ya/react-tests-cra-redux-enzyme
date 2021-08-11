import React, {Component} from 'react';
import {connect} from 'react-redux';

/* eslint-disable require-jsdoc */
class CommentList extends Component {
  renderComments() {
    // eslint-disable-next-line react/prop-types
    return this.props.comments.map((comment) => (
      <li key={comment}>{comment}</li>
    ));
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {comments: state.comments};
}

export default connect(mapStateToProps, null)(CommentList);
