import React from "react";
import { Menu, Input } from "semantic-ui-react";
import CreateGroupButton from "./createGroup"

const groupMenuBar = () => (
  <Menu>
    <CreateGroupButton/>
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
