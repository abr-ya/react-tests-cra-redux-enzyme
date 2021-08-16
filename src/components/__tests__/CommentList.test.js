import React from 'react';
import {mount} from 'enzyme';
import CommentList from '../CommentList';
import WithRedux from '../../WithRedux';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['comment1', 'comment2', 'третий комментарий'],
  };

  component = mount(
      <WithRedux initialState={initialState}>
        <CommentList />
      </WithRedux>,
  );
});

afterEach(() => {
  component.unmount();
});

it('создаёт li-элемент для каждого комментария', () => {
  expect(component.find('li').length).toEqual(3);
});

it('отображает все комментарии', () => {
  expect(component.render().text()).toContain('comment1');
  expect(component.render().text()).toContain('comment2');
  expect(component.render().text()).toContain('третий комментарий');
});
