import {saveComment} from '../';
import {SAVE_COMMENT} from '../types';

describe('Action saveComment', () => {
  it('создается с корректным type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('создается с корректным payload', () => {
    const action = saveComment('NewComment');
    expect(action.payload).toEqual('NewComment');
  });
});
