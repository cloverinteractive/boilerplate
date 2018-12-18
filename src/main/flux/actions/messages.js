import v4 from 'uuid/v4';
import { ADD_MESSAGE, DISMISS_MESSAGE } from 'main/constants/action-types';

const addMessage = (header, content, type) => {
  const id = v4();
  const message = {
    content, header, id, type,
  };

  return {
    type: ADD_MESSAGE,
    message,
    id,
  };
};

const removeMessage = id => ({
  type: DISMISS_MESSAGE,
  id,
});

export const addNotice = content => addMessage('Succes!', content, 'success');

export const addError = content => addMessage('Something went wrong', content, 'error');

export const addWarning = content => addMessage('Warning', content, 'warning');

export default removeMessage;
