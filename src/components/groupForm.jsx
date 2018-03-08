import React from "react";
import { Form, Grid } from "semantic-ui-react";

const GroupForm = ({ onChangeFunction }) => (
  <Grid>
    <Grid.Column>
      <Form size="large">
        {/* Name */}
        <Form.Field required>
          <label>Group Name</label>
          <Form.Input
            fluid
            icon="user"
            name="name"
            iconPosition="left"
            placeholder="Group Name"
            onChange={onChangeFunction}
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
          name="category"
          iconPosition="left"
          placeholder="Input Category"
          onChange={onChangeFunction}
        />
        {/* TODO: THIS SHOULD BE A DROPDOWN DECISION */}

        {/* TODO: TEXT AREA */}
        <Form.Input
          fluid
          icon="lock"
          name="description"
          iconPosition="left"
          placeholder="Input Description"
          onChange={onChangeFunction}
        />
      </Form>
    </Grid.Column>
  </Grid>
);

export default GroupForm;
