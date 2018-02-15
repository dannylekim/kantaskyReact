import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

const extra = (numberOfUsers, category) => (
  <div>
    <Label as="a"  color='red'>
      <Icon name="user" />
      {numberOfUsers} Users
    </Label>
    <Label as="a"  color={(category === 'personal') ? 'green' : 'blue'}>{category}</Label>
  </div>
);

const groupCard = ({ name, teamLeader, category, description, users }) => (
  <Card
    // image="http://via.placeholder.com/290x290"
    header={name}
    meta={"Project Lead: " + teamLeader}
    description={description}
    extra={extra(users.length, category)}
    color='blue'
  />
);

export default groupCard;
