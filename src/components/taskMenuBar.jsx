import React from "react";
import { Menu, Icon, Input } from "semantic-ui-react";

const taskMenuBar = ({ isTeamLeader }) => {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="add" />
      </Menu.Item>
      <Menu.Item>
        <Icon name="remove" />
      </Menu.Item>
      {isTeamLeader && (
          <Menu.Item>
            <Icon name="add user" />
          </Menu.Item>
        ) && (
          <Menu.Item>
            <Icon name="remove user" />
          </Menu.Item>
        ) && (
          <Menu.Item>
            <Icon name="edit" />
          </Menu.Item>
        )}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            transparent
            icon={{ name: "search", link: true }}
            placeholder="Search Tasks..."
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default taskMenuBar;
