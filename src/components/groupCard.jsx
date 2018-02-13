import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = numberOfUsers => (
  <a>
    <Icon name="user" />
    {numberOfUsers} Users
  </a>
);

const groupCard = (name, teamLeader, description, users) => (
  <Card
    image="http://via.placeholder.com/290x290"
    header={name}
    meta={teamLeader}
    description={description}
    extra={extra(users.length())}
  />
);

export default groupCard;
