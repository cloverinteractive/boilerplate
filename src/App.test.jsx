import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <StaticRouter>
          <App />
        </StaticRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
