import * as React from 'react';
import renderer from 'react-test-renderer';
import Libraries from './Libraries';

jest.mock('uuid/v1', () => jest.fn((_, increment) => `mocked-random-uuid-${increment}`));

describe('<Libraries />', () => {
  const libraries = [
    { description: 'A library description', library: 'A Library', url: 'https://alibrary.com' },
    { description: 'B library description', library: 'B Library', url: 'https://blibrary.com' },
  ];

  test('it renders correctly', () => {
    const tree = renderer
      .create(<Libraries libraries={libraries} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
