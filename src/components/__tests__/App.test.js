import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it('выводит компонент добавления', () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it('выводит список комментариев', () => {
  expect(component.find(CommentList).length).toEqual(1);
});
