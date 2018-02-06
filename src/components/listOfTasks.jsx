import React from "react";
import { Card } from "semantic-ui-react";
import TaskModal from "./taskModal";

const listOfTasks = props => (
  <Card header={props.category}>
    <Card.Content>
      {props.items.map(task => (
        <TaskModal
          category={task.category}
          description={task.description}
          key={task._id}
          status={task.status}
          importance={task.importance}
          dueDate={task.dueDate}
          createdDate={task.createdDate}
          name={task.name}
          user={task.user}
        />
      ))}
    </Card.Content>
  </Card>
);

export default listOfTasks;
