import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import MessageProvider, { reducer } from './components/MessageContext.bs';
import Messages from './components/Messages.bs';
import Error404 from './pages/Error404.bs';
import Nav from './components/Nav.bs';
import routes from './routes';

import './css/bulma.scss';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ children }) => {
  const context = React.useReducer(reducer, null);

  return (
    <MessageProvider value={context}>
      <div className="wrapper">
        <Nav />
        <Messages />
        <Switch>
          {routes.map(({
            path, exact, component: C, ...rest
          }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => <C {...props} {...rest} />}
            />
          ))}
          {children}
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
    </MessageProvider>
  );
};

export default App;
