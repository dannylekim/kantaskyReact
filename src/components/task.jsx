import React from "react";

import { Card } from "semantic-ui-react";

const task = ({ name, description, importance, user, color, ...rest }) => (
  <Card
    header={name}
    description={description}
    meta={importance}
    extra={user}
    {...rest}
    color="red"
    style={{ backgroundColor: color }}
  />
);

export default task;
