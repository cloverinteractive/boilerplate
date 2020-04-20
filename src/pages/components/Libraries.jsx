import * as React from 'react';
import { v1 } from 'uuid';

const Libraries = ({ libraries }) => (
  <ul className="libraries">
    {libraries.map(({ description, library, url }) => (
      <li key={v1()}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          {library}
        </a>
        {' '}
        -
        <span className="is-italic">{description}</span>
      </li>
    ))}
  </ul>
);

export default Libraries;
