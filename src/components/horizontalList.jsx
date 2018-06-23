import React from "react";
import { Icon, List } from "semantic-ui-react";

const HorizontalList = ({ users }) => {
  let listOfUsers;
  if (users) {
    listOfUsers = users.map(item => (
      <List.Item key={item.userId}>
        <Icon name="user" />
        <List.Content>
          <List.Header>
            {item.userId === "general" ? "General" : item.userName}
          </List.Header>
        </List.Content>
      </List.Item>
    ));
  }

  return (
    <List animated verticalAlign="middle">
      {listOfUsers}
    </List>
  );
};

export default HorizontalList;
