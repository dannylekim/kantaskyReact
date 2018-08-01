import React from "react";
import { Card } from "semantic-ui-react";
import TaskModal from "./taskModal";
import { Draggable } from "react-beautiful-dnd";

const listOfTasks = ({ items, category, color, dropColor, categories, canEdit }) => (
  <Card color={color}>
    <Card.Content style={{ flexGrow: 0 }}>
      <Card.Header> {category}</Card.Header>
    </Card.Content>
    <Card.Content style={{backgroundColor: dropColor}}>
      {items.map((task, index) => (
        <Draggable draggableId={task._id} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div style={{ marginBottom: "10px"}}>
                  <TaskModal
                    color = {snapshot.isDragging ? "#e6ffdc" : ""}
                    category={task.category}
                    description={task.description}
                    key={task._id}
                    categories={categories}
                    status={task.status}
                    importance={task.importance}
                    dueDate={task.dueDate}
                    createdDate={task.createdDate}
                    name={task.name}
                    user={task.user}
                    userName = {(task.userName) ? task.userName : 'General'}
                    id={task._id}
                    group={task.group}
                    timing={index}
                    canEdit={canEdit}
          
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
