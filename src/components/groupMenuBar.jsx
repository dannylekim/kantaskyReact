import React from "react";
import { Menu, Icon, Input } from "semantic-ui-react";

const groupMenuBar = () => (
  <Menu>
    <Menu.Item>
      <Icon name="add" />
    </Menu.Item>
    <Menu.Item>
      <Icon name="remove" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Input
          transparent
          icon={{ name: "search", link: true }}
          placeholder="Search Groups..."
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default groupMenuBar;
