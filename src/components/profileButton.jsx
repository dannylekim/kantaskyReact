import React from "react";
import { Icon, Label } from "semantic-ui-react";
import { connect } from "react-redux";

class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null
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
      userProps.lastName !== this.state.lastName
    ) {
      const user = {
        firstName: userProps.firstName,
        lastName: userProps.lastName
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
      <span>
        <Icon name="user circle" />
        {this.state.firstName} {this.state.lastName}
      </span>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
export default connect(mapToState)(ProfileButton);
