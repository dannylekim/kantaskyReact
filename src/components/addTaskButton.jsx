import React from "react";
import { Button, Menu, Modal, Icon } from "semantic-ui-react";
import TaskForm from "./taskForm";

const AddTaskModal = ({...rest}) => (
  <Menu.Item>
    <Button color="green" inverted icon="add" {...rest}/>
  </Menu.Item>
);

const CreateTask = () => (
  <Modal trigger={<AddTaskModal />}>
    <Modal.Header>Create a Task in this group</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <TaskForm />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="green">
        <Icon name="checkmark" /> Confirm
      </Button>
      <Button basic color="red">
        <Icon name="remove" /> Cancel
      </Button>
    </Modal.Actions>
  </Modal>
);

export default CreateTask;
