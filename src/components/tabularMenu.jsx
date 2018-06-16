import React, { Component } from "react";
import { Menu, Label } from "semantic-ui-react";
import { history } from "../config/config";
import DropdownMenu from "./dropdownMenu";
import { connect } from "react-redux";

class TabularMenu extends Component {
  state = { activeItem: "personal" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    history.push("/" + name);
  };

  componentWillMount() {
    const pathName = window.location.pathname;
    if (pathName.includes("group")) this.setState({ activeItem: "groups" });
    else if (pathName.includes("mail")) this.setState({ activeItem: "mail" });
    else this.setState({ activeItem: "personal" });
  }

  //this is done because if you select into a groups page, sign out, the personal tab doesn't change properly
  componentWillUpdate() {
    const pathName = window.location.pathname;
    if (pathName.includes("group") && this.state.activeItem !== 'groups') this.setState({ activeItem: "groups" });
    else if (pathName.includes("mail") && this.state.activeItem !== 'mail') this.setState({ activeItem: "mail" });
    else if (this.state.activeItem !== 'personal' && pathName.includes("personal")) this.setState({ activeItem: "personal" });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary>
        <Menu.Item
          name="personal"
          active={activeItem === "personal"}
          onClick={this.handleItemClick}
        >
          Personal Tasks
        </Menu.Item>
        <Menu.Item
          name="groups"
          active={activeItem === "groups"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mail"
          active={activeItem === "mail"}
          onClick={this.handleItemClick}
        >
          Mail
          {this.props.user &&
            this.props.user.notifications.length > 0 && (
              <Label color="red" circular size="tiny">
                {this.props.user.notifications.length}
              </Label>
            )}
        </Menu.Item>
        <Menu.Item position="right">
          <DropdownMenu />
        </Menu.Item>
      </Menu>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
export default connect(mapToState)(TabularMenu);
