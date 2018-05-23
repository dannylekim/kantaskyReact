import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { joinGroup } from "../redux/group/groupActionDispatcher";
import { updateAccount } from "../redux/user/userActionDispatcher";

class JoinGroupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: null,
      userId: null,
      notifications: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const hasJoined = await this.props.joinGroup(this.state.groupId);
    if (hasJoined) {
      let newAccountDetails = {};
      newAccountDetails.notifications = this.state.notifications.filter((notification) => {
        return notification.groupId !== this.state.groupId
      })
      this.props.updateAccount(newAccountDetails, this.state.userId)
    }
  }

  /**
   * This is done to initialize the profile page and set it up with information
   *
   */
  initializePage() {
    const userProps = this.props.user;
    //done to check for different. Could be extracted into a utility method if need be
    if (
      userProps &&
      (userProps._id !== this.state.userId ||
        userProps.notifications !== this.state.notifications)
    ) {
      const user = {
        notifications: userProps.notifications,
        userId: userProps._id
      };
      this.setState(user);
    }
  }

  componentWillMount() {
    if (this.props.groupId && this.props.groupId !== this.state.groupId)
      this.setState({ groupId: this.props.groupId });
    this.initializePage();
  }

  componentWillUpdate() {
    if (this.props.groupId && this.props.groupId !== this.state.groupId)
      this.setState({ groupId: this.props.groupId });
    this.initializePage();
  }

  render() {
    return (
      <Button inverted color="blue" onClick={this.handleClick}>
        <Icon name="checkmark" /> Join Group
      </Button>
    );
  }
}

const mapStateToProps = state => ({ user: state.user.user });
const mapDispatch = { joinGroup, updateAccount };
export default connect(mapStateToProps, mapDispatch)(JoinGroupButton);
