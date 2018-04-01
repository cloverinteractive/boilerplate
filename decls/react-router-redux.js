declare module 'react-router-redux' {
  declare type LocationPayload = {
    pathname: string,
    search: string,
    hash: string,
    key: string,
  };

  declare type State = {
    location: ?LocationPayload,
  };

  declare type External = {
    type: string,
  }

  declare type LocationChange = {
    type: '@@router/LOCATION_CHANGE',
    payload: LocationPayload,
  };

  declare type Init = {
    type: '@@INIT',
  };
  
  declare type Action = Init 
    | LocationChange
    | External;

  declare export type RouterReducer = (state: State | void, action: Action) => State;

  declare export function routerReducer(
    state: State,
    action: Action): State;

  declare export function routerMiddleware(
    history: History | {}): (state: State | void, action: Action) => any;
};
