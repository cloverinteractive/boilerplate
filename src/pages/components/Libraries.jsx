// @flow

import React from 'react';
import v4 from 'uuid/v4';
import type { NpmLibrary } from 'pages/constants/types';

type Props = {
  libraries: Array<NpmLibrary>,
};

export const Library = ({ description, library, url }: NpmLibrary) => (
  <li>
    <a href={url} rel="noopener noreferrer" target="_blank">{library}</a> - <em>{description}</em>
  </li>
);

const Libraries = ({ libraries }: Props) => {
  const items = libraries.map(library => <Library key={v4()} {...library} />);

  return (
    <ul className="libraries">
      { items }
    </ul>
  );
};

export default Libraries;
