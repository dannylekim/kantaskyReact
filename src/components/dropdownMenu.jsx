import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ProfileButton from "./profileButton";
import UpdateUserModal from "./updateUserModal";
import ChangePasswordModal from "./changePasswordModal";
import { connect } from "react-redux";
class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      id: null
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
      userProps.email !== this.state.email
    ) {
      const user = {
        firstName: userProps.firstName,
        lastName: userProps.lastName,
        email: userProps.email,
        id: userProps._id
      };
      this.setState(user);
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
      <Dropdown trigger={<ProfileButton />} pointing="top left">
        <Dropdown.Menu>
          <Dropdown.Header>{this.state.email}</Dropdown.Header>
          <UpdateUserModal />
          <ChangePasswordModal userID={this.state.id} />
          <Dropdown.Item text="Sign Out" />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
export default connect(mapToState)(DropDownMenu);
