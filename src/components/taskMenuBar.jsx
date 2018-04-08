import React from "react";
import { Menu, Icon, Input } from "semantic-ui-react";
import AddTaskButton from "./createTask";
import ViewGroupModal from "./viewGroupModal";
import AddUserModal from "./addUserModal";

const taskMenuBar = ({ isTeamLeader, groupId, group }) => {
  return (
    <Menu>
      <AddTaskButton groupId={groupId} />
      <Menu.Item>
        <Icon name="remove" />
      </Menu.Item>

      {isTeamLeader && (
        <Menu.Item>
          <Icon name="remove user" />
        </Menu.Item>
      )}
      {isTeamLeader && <ViewGroupModal groupId={groupId} />}
      {isTeamLeader && <AddUserModal />}
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
