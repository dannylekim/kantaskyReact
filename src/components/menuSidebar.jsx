import React, { Component } from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { signOut } from "../redux/user/userActionDispatcher";
import { connect } from "react-redux";
import { history } from "../config/config";

class MenuSidebar extends Component {
  constructor(props) {
    super(props);
    this.goToPersonal = this.goToPersonal.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToGroups = this.goToGroups.bind(this);
    this.goToSettings = this.goToSettings.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
  }

  goToPersonal() {
    history.push("/personal");
  }
  goToHome() {
    history.push("/");
  }
  goToGroups() {
    history.push("/groups");
  }
  goToSettings() {
    history.push("/settings");
  }
  goToProfile() {
    history.push("/profile");
  }

  render() {
    return (
      <Sidebar
        as={Menu}
        animation="push"
        width="thin"
        visible={this.props.visible}
        icon="labeled"
        vertical
        inverted
      >
        {/* <Menu.Item name="home" onClick={this.goToHome}>
          <Icon name="home" />
          Home
        </Menu.Item> */}
        {/* <Menu.Item name="profile" onClick={this.goToProfile}>
          <Icon name="user circle" />
          Profile
        </Menu.Item> */}

        <Menu.Item name="personal" onClick={this.goToPersonal}>
          <Icon name="tasks" />
          Your Tasks
        </Menu.Item>

        <Menu.Item name="groups" onClick={this.goToGroups}>
          <Icon name="users" />
          Groups
        </Menu.Item>
        {/* <Menu.Item name="settings" onClick={this.goToSettings}>
          <Icon name="settings" />
          Settings
        </Menu.Item> */}
        {/* <Menu.Item name="signOut" onClick={this.props.signOut}>
          <Icon name="sign out" />
          Sign Out
        </Menu.Item> */}
      </Sidebar>
    );
  }
}

const mapDispatch = { signOut };
export default connect(null, mapDispatch)(MenuSidebar);