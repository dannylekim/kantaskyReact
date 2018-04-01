import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import ProfileButton from "./profileButton";
import UpdateUserModal from "./updateUserModal";
import ChangePasswordModal from "./changePasswordModal";

export default class DropDownMenu extends Component {
  render() {
    return (
      <Dropdown trigger={<ProfileButton/>} pointing="top left">
        <Dropdown.Menu>
          <Dropdown.Header>dannylekim@gmail.com</Dropdown.Header>
          <UpdateUserModal />
          <ChangePasswordModal />
          <Dropdown.Item text="Sign Out"/>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
