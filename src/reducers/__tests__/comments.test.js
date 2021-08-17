import commentsReducer from '../comments';
import {SAVE_COMMENT} from '../../actions/types';

it('Корректно отрабатывает экшен SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Новый комментарий Васи Иванова',
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['Новый комментарий Васи Иванова']);
});

it('Корректно отрабатывает непонятный type', () => {
  const newState = commentsReducer(
    ['Старый комментарий Васи Иванова'],
    {type: 'AVE_COMMENT'}
  );
  expect(newState).toEqual(['Старый комментарий Васи Иванова']);
});
