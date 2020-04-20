import * as React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('<About />', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
