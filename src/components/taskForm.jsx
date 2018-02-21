import React from "react";
import { Form, Grid, Segment, Header, Button } from "semantic-ui-react";
import { createTaskInGroup } from "../redux/task/taskActionDispatcher";

class TaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      dueDate: null,
      category: "Misc.",
      importance: "normal",
      status: "pending",
      description: null
    };
    this.addTask = this.addTask.bind(this);
  }
  /**
   * Handles all input changes within the form
   *
   * @param {any} event
   * @memberof loginForm
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });
  }

  addTask() {
    const groupId = this.props.match.params.groupId;
    createTaskInGroup(groupId, this.state);
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Form size="large" onSubmit={this.handleSubmit}>
            {/* Name */}
            <Form.Field required>
            <label>Task Name</label>
              <Form.Input
                fluid
                icon="user"
                name="name"
                iconPosition="left"
                placeholder="Task Name"
                onChange={this.handleInputChange}
                required
              />
            </Form.Field>
            {/* Should be buttons */}
            {/* TODO: */}
            {/* Status */}

            {/* Should be buttons */}
            {/* TODO: */}
            {/* Importance */}

            <Form.Input
              fluid
              icon="lock"
              name="Due Date"
              iconPosition="left"
              placeholder="Input Due Date"
              onChange={this.handleInputChange}
            />

            <Form.Input
              fluid
              icon="lock"
              name="Category"
              iconPosition="left"
              placeholder="Input Category"
              onChange={this.handleInputChange}
            />

            {/* TODO: TEXT AREA */}
            <Form.Input
              fluid
              icon="lock"
              name="Description"
              iconPosition="left"
              placeholder="Input Description"
              onChange={this.handleInputChange}
            />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TaskForm;
