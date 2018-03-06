import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null
    };
  }

  /**
   * This is done to initialize the profile page and set it up with information
   *
   * @memberof ProfilePage
   */
  initializePage() {
    const userProps = this.props.user;
    //done to check for different. Could be extracted into a utility method if need be
    if (
      userProps &&
      userProps.firstName !== this.state.firstName &&
      userProps.lastName !== this.state.lastName &&
      userProps.email !== this.state
    ) {
      const user = {
        firstName: userProps.firstName,
        lastName: userProps.lastName,
        email: userProps.email
      };
      if (user !== this.state) {
        this.setState(user);
      }
    }
  }
  componentDidUpdate() {
    this.initializePage();
  }
  componentWillMount() {
    this.initializePage();
  }

  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>{this.state.firstName}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{this.state.lastName}</Segment>
            <Segment>{this.state.email}</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment> Old Password</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
          <Segment> New Password</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
          <Segment> Confirm New Password</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
export default connect(mapToState)(ProfilePage);
