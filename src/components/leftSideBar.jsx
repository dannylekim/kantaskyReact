import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {signOut} from "../redux/user/userActionDispatcher"
import {connect} from "react-redux"

class SidebarLeftPush extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    let divStyle = {
      height: 25 + "em"
    };

 

    const { visible } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="profile">
              <Icon name="user circle" />
              Profile
            </Menu.Item>
            <Menu.Item name="personal">
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
          <Sidebar.Pusher>
            <Segment basic>
              
              <Menu.Item onClick={this.toggleVisibility} >
                <Icon name="sidebar" />
              </Menu.Item>
              <Header as="h3">Application Content</Header>
              <div style={divStyle}>
                Testing the SideBar
              </div>
              <Link to="/login">
                  <Button color="teal">Go to Login</Button>
              </Link>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapDispatch = { signOut };
export default connect(null, mapDispatch)(SidebarLeftPush);

