import type { Dispatch } from 'redux'

declare module 'redux-thunk' {
  declare type Action = {
    type: string,
  };

  declare type State = {} | void;

  declare type getState = () => State;

  declare export function thunkMiddleware(
    state: State, action: Action): (state: State, action: Action, dispatch: Dispatch<Action>, getState: getState, any) => any;
}
