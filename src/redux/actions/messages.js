import { v1 } from 'uuid';
import { ADD_MESSAGE, DISMISS_MESSAGE } from './types';

const addMessage = (header, content, type) => {
  const id = v1();
  const message = {
    content, header, id, type,
  };

  return {
    type: ADD_MESSAGE,
    message,
    id,
  };
};

const removeMessage = (id) => ({
  type: DISMISS_MESSAGE,
  id,
});

export const addNotice = (content) => addMessage('Succes!', content, 'is-success');

export const addError = (content) => addMessage('Something went wrong', content, 'is-danger');

export const addWarning = (content) => addMessage('Warning', content, 'is-warning');

export default removeMessage;
