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

class SidebarLeftPush extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    let divStyle = {
      height: 20 + "em"
    };

    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
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
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
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

export default SidebarLeftPush;
