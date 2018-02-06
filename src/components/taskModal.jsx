import React from "react";
import { Header, Modal } from "semantic-ui-react";
import Task from "./task";

const taskModal = props => (
  <Modal
    trigger={
      <Task
        name={props.name}
        description={props.description}
        user={props.user}
        importance={props.importance}
      />
    }
  >
    <Modal.Header>{props.name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>{props.category}</Header>
        <p>{props.description}</p>
        <p>Assigned to: {props.user} </p>
        <p>Importance: {props.importance}</p>
        <p>Status: {props.status}</p>
        <p>Due date: {props.dueDate}</p>
        <p>Created date" {props.createdDate}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default taskModal;
