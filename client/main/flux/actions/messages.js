import { v4 } from 'uuid';
import * as types from '../../constants/action-types';

const addMessage = (header, content, type) => {
  const id = v4();
  const message = { content, header, id, type };

  return {
    type: types.ADD_MESSAGE,
    message,
    id,
  };
};

const removeMessage = id => ({
  type: types.DISMISS_MESSAGE,
  id,
});

export const addError = content => dispatch => (
  dispatch(addMessage('Something went wrong', content, 'error'))
);

export const addWarning = content => dispatch => (
  dispatch(addMessage('Warning', content, 'warning'))
);

export default removeMessage;
