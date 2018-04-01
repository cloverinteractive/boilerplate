// @flow

type Alert<K, T> = {
  +[id: K]: T
}

export type MessageType = 'error'
  | 'success'
  | 'warning';

export type Message = {
  content: string,
  header: string,
  id: string,
  type: MessageType,
};

export type AddMessage = {
  id: string,
  message: Message,
  type: string,
};

export type RemoveMessage = {
  id: string,
  type: string,
}

export type Action = AddMessage | RemoveMessage;

export type State = {
  +entities: Alert<string, Message> | {},
  +ids: Array<string>,
};

type Error = {
  error: boolean,
};

type Success = {
  success: boolean,
};

type Warning = {
  warning: boolean,
};

export type Color = Error
  | Success
  | Warning;

export type AlertCreator = (content: string) => Action;
