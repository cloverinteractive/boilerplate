import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => (
  <Menu borderless>
    <Menu.Item name="home" as={Link} to="/">
      Home
    </Menu.Item>
    <Menu.Item name="about" as={Link} to="/about">
      About
    </Menu.Item>
  </Menu>
);
