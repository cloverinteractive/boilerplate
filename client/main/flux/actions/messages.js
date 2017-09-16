// @flow

import { v4 } from 'uuid';
import * as types from 'main/constants/action-types';

import type { Action, Message } from 'main/constants/types';

const addMessage = (header: string, content: string, type: string): Action => {
  const id = v4();
  const message: Message = { content, header, id, type };

  return {
    type: types.ADD_MESSAGE,
    message,
    id,
  };
};

const removeMessage = (id: string): Action => ({
  type: types.DISMISS_MESSAGE,
  id,
});

export const addError = (content: string) => (dispatch: Function) => (
  dispatch(addMessage('Something went wrong', content, 'error'))
);

export const addWarning = (content: string) => (dispatch: Function) => (
  dispatch(addMessage('Warning', content, 'warning'))
);

export default removeMessage;
