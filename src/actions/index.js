/* eslint-disable require-jsdoc */
import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS} from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

// request to API
export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/posts/1/comments');
  // console.log(response); // здесь промис => reduxPromise

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
