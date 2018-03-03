import React from "react";
import { Grid, Segment } from "semantic-ui-react";

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
            <Segment>2</Segment>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProfilePage;
