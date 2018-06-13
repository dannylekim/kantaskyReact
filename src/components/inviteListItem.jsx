import React from "react";
import { List } from "semantic-ui-react";

const InviteListItem = ({ teamLeader, groupId, unread, onClick }) => {
  let description;
  if (unread) {
    description = (
      <List.Header>
        {teamLeader.name} has invited you to join their group!
      </List.Header>
    );
  } else {
    description = `${teamLeader.name}  has invited you to join their group!`;
  }
  return (
    <List.Item onClick={onClick}>
      <List.Icon name="arrow right" />
      <List.Content>{description}</List.Content>
    </List.Item>
  );
};

export default InviteListItem;
