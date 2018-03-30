declare module 'react-router-redux' {
  declare type State = {
    location: ?{
      pathname: string,
      search: string,
      hash: string,
      key: string,
    },
  };
  
  declare type Action = '@@INIT' | '@@router/LOCATION_CHANGE';

  declare export type RouterReducer = (state: State, action: Action) => State;

  declare export function routerReducer(
    state: State,
    action: Action): State;
}
