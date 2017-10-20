// @flow

type Alert<K, T> = {
  +[id: K]: T
}

export type Message = {
  content: string,
  header: string,
  id: string,
  type: string,
};

export type Action = {
  id: string,
  message?: Message,
  type: string,
};

export type State = {
  +entities: Alert<string, Message> | {},
  +ids: Array<string>,
};

export type Colors = {
  error?: boolean,
  success?: boolean,
  warning?: boolean,
};
