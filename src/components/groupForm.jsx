import React from "react";
import { Form, Grid, Dropdown } from "semantic-ui-react";

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

        <Dropdown
          options={[
            { key: "group", value: "group", text: "Group" },
            { key: "personal", value: "personal", text: "Personal" }
          ]}
          name="category"
          placeholder="Choose a category"
          selection
          fluid
          onChange={onChangeFunction}
        />
        <br />

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
