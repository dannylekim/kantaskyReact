import React from "react";
import { Card } from "semantic-ui-react";
import TaskModal from "./taskModal";

class listOfTasks extends React.Component {

  render() {
    const items = this.props.items;
    return (
      <Card color={this.props.color} className='group-card'>
        <Card.Content style={{ flexGrow: 0 }}>
          <Card.Header> {this.props.category}</Card.Header>
        </Card.Content>
        <Card.Content >
          {items.map((task, index) => (
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
              timing={index}
            />
          ))}
        </Card.Content>
      </Card>
    )
  }
}

export default listOfTasks;
