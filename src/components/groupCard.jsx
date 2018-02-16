import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

const extra = (numberOfUsers, category) => (
  <div>
    <Label color='red'>
      <Icon name="user" />
      {numberOfUsers} User{(numberOfUsers > 1) && 's'}
    </Label>
    <Label color={(category === 'personal') ? 'green' : 'blue'}>{category}</Label>
  </div>
);

const groupCard = ({ name, teamLeader, category, description, users, id }) => (
  <Card
    // image="http://via.placeholder.com/290x290"
    href={'/groups/' + id}
    header={name}
    meta={"Project Lead: " + teamLeader}
    description={description}
    extra={extra(users.length, category)}
    color='blue'
  />
);

export default groupCard;
