import React from "react";
import { Card } from "semantic-ui-react";
import TaskModal from "./taskModal";
import { Draggable } from "react-beautiful-dnd";

const listOfTasks = ({ items, category, color }) => (
  <Card color={color}>
    <Card.Content style={{ flexGrow: 0 }}>
      <Card.Header> {category}</Card.Header>
    </Card.Content>
    <Card.Content>
      {items.map((task, index) => (
        <Draggable draggableId={task._id} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div style={{ marginBottom: "10px", color: snapshot.isDragging ? "blue" : "white"}}>
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
                    group={task.group}
                  />
                </div>
              </div>
            );
          }}
        </Draggable>
      ))}
    </Card.Content>
  </Card>
);

export default listOfTasks;
