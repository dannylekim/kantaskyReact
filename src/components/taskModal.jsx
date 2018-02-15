import React from "react";
import { Header, Modal, Label } from "semantic-ui-react";
import Task from "./task";

const taskModal = ({
  name,
  description,
  importance,
  user,
  status,
  dueDate,
  createdDate,
  category,
  ...rest
}) => {
  let importanceColor, statusColor;
  if (importance == "urgent") importanceColor = "red";
  else if (importance == "important") importanceColor = "orange";
  else importanceColor = "yellow";

  if (status == "ongoing") statusColor = "orange";
  else if (status == "pending") statusColor = "grey";
  else statusColor = "teal";

  return (
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
          <p>
            Assigned to: <Label color="blue"> {user} </Label>
          </p>
          <p>
            Importance: <Label color={importanceColor}>{importance} </Label>
          </p>
          <p>
            Status: <Label color={statusColor}> {status} </Label>
          </p>
          <p>
            Due date: {(dueDate) && <Label color="purple"> {dueDate} </Label>}
          </p>
          <p>
            Created date: {(createdDate) && <Label color="pink"> {createdDate} </Label>}
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default taskModal;
