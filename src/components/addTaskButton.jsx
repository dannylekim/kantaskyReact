import React from "react"
import {Menu, Button} from "semantic-ui-react"

const AddTaskButton = ({ ...rest, onClick }) => (
    <Menu.Item onClick={onClick}>
      <Button color="green" inverted icon="add" {...rest} />
    </Menu.Item>
  );

export default AddTaskButton