import React from "react";
import { Icon, List, Label } from "semantic-ui-react";

const HorizontalList = ({ users, teamLeader }) => {
  let listOfUsers;
  if (users) {
    listOfUsers = users.map(item => (
      <List.Item key={item.userId}>
        <Icon name="user" />
        <List.Content>
          <List.Header>
            {item.userId === "general" ? "General" : item.userName} {teamLeader && teamLeader.leaderId === item.userId ? (<Label pointing='left' size='tiny' color='blue'> Team Leader </Label>) : ("")}
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
