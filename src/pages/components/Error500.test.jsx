import * as React from 'react';
import renderer from 'react-test-renderer';
import Error500 from './Error500';

describe('<Error500 />', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<Error500 />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
