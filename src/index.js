import React from 'react';
import ReactDOM from 'react-dom';
import WithRedux from './WithRedux';
import App from './components/App';

const initialState = {
  comments: ['comment #1 (from index)', 'comment #2 (from index)'],
};

ReactDOM.render(
    <WithRedux initialState={initialState}>
      <App />
    </WithRedux>,
    document.getElementById('root'),
);
