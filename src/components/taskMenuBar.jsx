import React from "react";
import { Menu, Icon, Input } from "semantic-ui-react";
import AddTaskButton from "./addTaskButton"

const taskMenuBar = ({ isTeamLeader, groupId }) => {
  return (
    <Menu>
      <AddTaskButton groupId={groupId}/>
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
