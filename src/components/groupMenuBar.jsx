import React from "react";
import { Menu } from "semantic-ui-react";
import CreateGroupButton from "./createGroup"
import SearchGroups from "./searchGroups"

const groupMenuBar = () => (
  <Menu>
    <CreateGroupButton/>
    <Menu.Menu position="right">
      <Menu.Item>
        <SearchGroups />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default groupMenuBar;
