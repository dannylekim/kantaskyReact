import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = props => (
  <a>
    <Icon name="user" />
    {props} Users
  </a>
);

const groupCard = props => (
  <Card
    image="http://via.placeholder.com/290x290"
    header={props.name}
    meta={props.teamLeader}
    description={props.description}
    extra={extra(props.users.length())}
  />
);

export default groupCard;
