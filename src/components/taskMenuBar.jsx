import React from "react";
import { Menu, Input } from "semantic-ui-react";
import AddTaskButton from "./createTask";
import ViewGroupModal from "./viewGroupModal";
import AddUserModal from "./addUserModal";
import DeleteGroupModal from "./deleteGroupModal";
import LeaveGroupModal from "./leaveGroupModal";

const taskMenuBar = ({ isTeamLeader, groupId, group }) => {
  return (
    <Menu>
      <AddTaskButton groupId={groupId} />
      {isTeamLeader && <ViewGroupModal groupId={groupId} />}
      {isTeamLeader && <AddUserModal groupId={groupId} />}
      {isTeamLeader && <DeleteGroupModal groupId={groupId} />}
      {isTeamLeader && <LeaveGroupModal groupId={groupId} isTeamLeader={isTeamLeader}/>}
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
