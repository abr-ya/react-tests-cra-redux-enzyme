import React from 'react';
import {mount} from 'enzyme';
import CommentBox from '../CommentBox';
import WithRedux from '../../WithRedux';

let component;

beforeEach(() => {
  component = mount(
      <WithRedux>
        <CommentBox />
      </WithRedux>,
  );
});

afterEach(() => {
  component.unmount();
});

it('выводит поле для ввода текста и две кнопки', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('поле ввода текста при вводе с клавиатуры ...', () => {
  // использоуем в двух тестах - ввод теста и обновление
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: {value: 'test comment'},
    });
    component.update();
  });

  // проверяем значение после ввода
  it('содержит введенный текст', () => {
    expect(component.find('textarea').prop('value')).toEqual('test comment');
  });

  // отправляем - обновляем - проверяем
  it('очищается после отправки комментария', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
