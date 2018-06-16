import React from "react";
import { Form, Grid, Dropdown, TextArea } from "semantic-ui-react";

const TaskForm = ({ onClickFunction, categories, state }) => (
  <Grid>
    <Grid.Column>
      <Form size="large">
        {/* Name */}
        <Form.Field required>
          <label>Task Name</label>
          <Form.Input
            fluid
            icon="user"
            name="name"
            iconPosition="left"
            placeholder="Task Name"
            onChange={onClickFunction}
            required
          />
        </Form.Field>

        <Form.Input
          fluid
          icon="lock"
          name="dueDate"
          iconPosition="left"
          placeholder="Input Due Date"
          onChange={onClickFunction}
          type="date"
        />

        <Dropdown
          options={categories}
          name="category"
          placeholder="Choose a category"
          search
          selection
          fluid
          allowAdditions
          onChange={onClickFunction}
        />
        <br />

        <Form.Group inline>
          <label>Status: </label>
          <Form.Radio
            label="Pending"
            value="pending"
            name="status"
            checked={state.status === "pending"}
            onChange={onClickFunction}
          />
          <Form.Radio
            label="Ongoing"
            value="ongoing"
            name="status"
            checked={state.status === "ongoing"}
            onChange={onClickFunction}
          />
          <Form.Radio
            label="Completed"
            value="completed"
            name="status"
            checked={state.status === "completed"}
            onChange={onClickFunction}
          />
        </Form.Group>

        <Form.Group inline>
          <label>Importance: </label>
          <Form.Radio
            label="Normal"
            value="normal"
            name="importance"
            checked={state.importance === "normal"}
            onChange={onClickFunction}
          />
          <Form.Radio
            label="Important"
            value="important"
            name="importance"
            checked={state.importance === "important"}
            onChange={onClickFunction}
          />
          <Form.Radio
            label="Urgent"
            value="urgent"
            name="importance"
            checked={state.importance === "urgent"}
            onChange={onClickFunction}
          />
        </Form.Group>

        <TextArea
          placeholder="Task Description"
          name="description"
          fluid
          icon="lock"
          iconPosition="left"
          onChange={onClickFunction}
        />
      </Form>
    </Grid.Column>
  </Grid>
);

export default TaskForm;
