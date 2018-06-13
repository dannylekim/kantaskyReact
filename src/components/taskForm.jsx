import React from "react";
import { Form, Grid} from "semantic-ui-react";

const TaskForm = ({onClickFunction}) => (
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
            {/* Should be buttons */}
            {/* TODO: */}
            {/* Status */}

            {/* Should be buttons */}
            {/* TODO: */}
            {/* Importance */}

            <Form.Input
              fluid
              icon="lock"
              name="dueDate"
              iconPosition="left"
              placeholder="Input Due Date"
              onChange={onClickFunction}
              type="date"
            />

            <Form.Input
              fluid
              icon="lock"
              name="category"
              iconPosition="left"
              placeholder="Input Category"
              onChange={onClickFunction}
            />

            {/* TODO: TEXT AREA */}
            <Form.Input
              fluid
              icon="lock"
              name="description"
              iconPosition="left"
              placeholder="Input Description"
              onChange={onClickFunction}
            />
          </Form>
        </Grid.Column>
      </Grid>
)

export default TaskForm;
