import * as React from 'react';
import { v4 } from 'uuid';

export const Library = ({ description, library, url }) => (
  <li>
    <a href={url} rel="noopener noreferrer" target="_blank">{library}</a> - <em>{description}</em>
  </li>
);

const Libraries = ({ libraries }) => {
  const items = libraries.map(library => <Library key={v4()} {...library} />);

  return (
    <ul className="libraries">
      { items }
    </ul>
  );
};

export default Libraries;
