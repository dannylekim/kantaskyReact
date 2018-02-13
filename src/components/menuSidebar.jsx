import React, { Component } from "react";
import {
  Sidebar,
  Menu,
  Icon,
} from "semantic-ui-react";
import { signOut } from "../redux/user/userActionDispatcher";
import { connect } from "react-redux";
import { history } from "../config/config";

class MenuSidebar extends Component {
  constructor(props){
    super(props)
    this.goToTasks = this.goToTasks.bind(this)
    this.goToHome = this.goToHome.bind(this)
  }
 
  goToTasks() {
    history.push("/tasks");
  }
  goToHome(){
    history.push("/")
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
        <Menu.Item name="home" onClick={this.goToHome}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item name="profile" >
          <Icon name="user circle" />
          Profile
        </Menu.Item>

        <Menu.Item name="personal" onClick={this.goToTasks}>
          <Icon name="tasks" />
          Personal Tasks
        </Menu.Item>

        <Menu.Item name="groups">
          <Icon name="users" />
          Groups
        </Menu.Item>
        <Menu.Item name="settings">
          <Icon name="settings" />
          Settings
        </Menu.Item>
        <Menu.Item name="signOut" onClick={this.props.signOut}>
          <Icon name="sign out" />
          Sign Out
        </Menu.Item>
      </Sidebar>
    );
  }
}

const mapDispatch = { signOut };
export default connect(null, mapDispatch)(MenuSidebar);
