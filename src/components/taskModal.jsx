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
  if (importance === "urgent") importanceColor = "red";
  else if (importance === "important") importanceColor = "orange";
  else importanceColor = "yellow";

  if (status === "ongoing") statusColor = "orange";
  else if (status === "pending") statusColor = "grey";
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
          {description}
          <br/><br/>
            Assigned to: <Label color="blue"> {user} </Label>
            <br/><br/>
         
            Importance: <Label color={importanceColor}>{importance} </Label>
            <br/><br/>
            Status: <Label color={statusColor}> {status} </Label>
            <br/><br/>
            Due date: {(dueDate) && <Label color="purple"> {dueDate} </Label>}
            <br/><br/>
            Created date: {(createdDate) && <Label color="pink"> {createdDate} </Label>}
       
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default taskModal;
