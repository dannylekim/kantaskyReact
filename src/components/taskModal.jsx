import React from "react";
import { Header, Modal, Button } from "semantic-ui-react";
import Task from "./task";

const taskModal = ({name, description, importance, user, status, dueDate, createdDate, category, 
   ...rest}) => (
  <Modal
    trigger={
      <Task
        name={name}
        description={description}
        user={user}
        importance={importance}
        {...rest}
      />
    }
  >
    <Modal.Header>{name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>{category}</Header>
        <p>{description}</p>
        <p>Assigned to: {user} </p>
        <p>Importance: {importance}</p>
        <p>Status: {status}</p>
        <p>Due date: {dueDate}</p>
        <p>Created date" {createdDate}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default taskModal;
