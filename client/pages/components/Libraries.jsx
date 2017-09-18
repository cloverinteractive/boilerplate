// @flow

import React from 'react';
import { v4 } from 'uuid';
import libraries from 'pages/constants/libraries';

type NpmLibrary = {
  description: string,
  library: string,
  url: string,
};

const Library = ({ description, library, url }: NpmLibrary) => (
  <li>
    <a href={url} rel="noopener noreferrer" target="_blank">{library}</a> - <em>{description}</em>
  </li>
);

const Libraries = () => {
  const items = libraries.map(library => <Library key={v4()} {...library} />);

  return (
    <ul className="libraries">
      { items }
    </ul>
  );
};

export default Libraries;
