import React from "react";
import { Card } from "semantic-ui-react";
import TaskModal from "./taskModal";

const listOfTasks = ({items, category, color}) => (
  <Card color={color}>
    <Card.Content style={{flexGrow: 0}}>
      <Card.Header> {category}</Card.Header>
    </Card.Content>
    <Card.Content>
      {items.map(task => (
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
          id={task._id}
        />
      ))}
    </Card.Content>
  </Card>
);

export default listOfTasks;
