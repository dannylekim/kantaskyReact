import React from "react";

import { Card } from "semantic-ui-react";

const task = props => (
  <Card
    link
    header={props.name}
    description={props.description}
    meta={props.importance}
    extra={props.user}
  />
);

export default task;