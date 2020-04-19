import * as React from 'react';
import renderer from 'react-test-renderer';
import Error404 from './Error404';

describe('<Error404 />', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<Error404 />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
