import React from 'react';
import ReactDOM from 'react-dom';
import WithRedux from './WithRedux';
import App from './components/App';

const initialState = {
  comments: ['Комментарий #1 (from index)', 'Комментарий #2 (from index)'],
};

ReactDOM.render(
    <WithRedux initialState={initialState}>
      <App />
    </WithRedux>,
    document.getElementById('root'),
);
