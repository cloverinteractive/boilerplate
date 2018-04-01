// @flow

import v4 from 'uuid/v4';
import { ADD_MESSAGE, DISMISS_MESSAGE } from 'main/constants/action-types';
import type {
  AddMessage,
  AlertCreator,
  Message,
  MessageType,
  RemoveMessage,
} from 'main/constants/types';

const addMessage = (header: string, content: string, type: MessageType): AddMessage => {
  const id = v4();
  const message: Message = {
    content, header, id, type,
  };

  return {
    type: ADD_MESSAGE,
    message,
    id,
  };
};

const removeMessage = (id: string): RemoveMessage => ({
  type: DISMISS_MESSAGE,
  id,
});

export const addNotice: AlertCreator = (content: string): AddMessage => (
  addMessage('Succes!', content, 'success'));

export const addError: AlertCreator = (content: string): AddMessage => (
  addMessage('Something went wrong', content, 'error'));

export const addWarning: AlertCreator = (content: string): AddMessage => (
  addMessage('Warning', content, 'warning'));

export default removeMessage;
