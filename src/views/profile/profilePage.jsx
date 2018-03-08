import React from "react";
import { Grid, Segment, Label, Header, Button } from "semantic-ui-react";
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
            <Segment raised>
              <Label as="a" color="green" ribbon>
                Name
              </Label>
              <Header textAlign="center" as="h1">
                {this.state.firstName} {this.state.lastName}
              </Header>
            </Segment>
            <Segment raised>
              <Label as="a" color="blue" ribbon>
                Email
              </Label>
              <Header as="h1" textAlign="center">
                {this.state.email}
              </Header>
            </Segment>
            <Button fluid>Save Changes</Button>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              {" "}
              <Label as="a" color="yellow" ribbon>
                Old Password
              </Label>
            </Segment>
            <Segment raised>
              {" "}
              <Label as="a" color="orange" ribbon>
                New Password
              </Label>{" "}
            </Segment>
            <Segment raised>
              {" "}
              <Label as="a" color="red" ribbon>
                Confirm New Password
              </Label>
            </Segment>
            <Button fluid>Change Password</Button>
          </Grid.Column>
        </Grid.Row>
 
      </Grid>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
export default connect(mapToState)(ProfilePage);
