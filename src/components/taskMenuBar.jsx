import React from "react";
import { Menu, Input } from "semantic-ui-react";
import AddTaskButton from "./createTask";
import ViewGroupModal from "./viewGroupModal";
import AddUserModal from "./addUserModal";
import DeleteGroupModal from "./deleteGroupModal";
import LeaveGroupModal from "./leaveGroupModal";
import SearchTask from "./searchTasks";

const taskMenuBar = ({ isTeamLeader, groupId, group, categories }) => {
  return (
    <Menu>
      <AddTaskButton groupId={groupId} categories={categories} group={group} />
      {isTeamLeader && <ViewGroupModal groupId={groupId} />}
      {isTeamLeader && <AddUserModal groupId={groupId} />}
      {isTeamLeader && <DeleteGroupModal groupId={groupId} />}
      {isTeamLeader && (
        <LeaveGroupModal
          groupId={groupId}
          isTeamLeader={isTeamLeader}
          group={group}
        />
      )}
      <Menu.Menu position="right">
        <Menu.Item>
          <SearchTask />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default taskMenuBar;
