import React from "react";

import { Card } from "semantic-ui-react";

const task = ({name, description, importance,user, ...rest}) => (
  <Card
    link
    header={name}
    description={description}
    meta={importance}
    extra={user}
    {...rest}
    color='red'
  />
);

export default task;