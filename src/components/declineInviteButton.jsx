import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateAccount } from "../redux/user/userActionDispatcher";

class DeclineInvitationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: null,
      userId: null,
      notifications: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //TODO: WHEN YOU CLICK JOIN IT MUST ALSO UPDATE THE USER AND REMOVE HIS NOTIFICATIONS AND UPDATE REDUX FOR THAT
  async handleClick() {
      let newAccountDetails = {};
       newAccountDetails.notifications = this.state.notifications.filter((notification) => {
        return notification.groupId !== this.state.groupId
      })
      this.props.updateAccount(newAccountDetails, this.state.userId)
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
      <Button Basic onClick={this.handleClick}>
        <Icon name="checkmark" /> Decline Invitation
      </Button>
    );
  }
}

const mapStateToProps = state => ({ user: state.user.user });
const mapDispatch = { updateAccount };
export default connect(mapStateToProps, mapDispatch)(DeclineInvitationButton);
