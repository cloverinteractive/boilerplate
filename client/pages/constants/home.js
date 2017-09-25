/* eslint-disable no-irregular-whitespace */
export const PAGES_TREE = `
client/pages/
├── components
│   ├── About.jsx
│   ├── Error404.jsx
│   ├── Home.jsx
│   └── Libraries.jsx
├── constants
│   ├── home.js
│   ├── libraries.js
│   └── types.js
├── index.js
└── styles
    └── code.css
`.trim();

export const MAIN_TREE = `
client/main/
├── components
│   ├── Header.jsx
│   ├── Messages.jsx
│   └── Nav.jsx
├── constants
│   ├── action-types.js
│   ├── index.js
│   └── types.js
├── flux
│   ├── actions
│   │   └── messages.js
│   ├── reducers
│   │   └── index.js
│   └── selectors
│       └── messages.js
└── index.js
`.trim();
/* eslint-enable no-irregular-whitespace */
