import React from "react";
// import JoinGroupButton from "../../components/joinGroupButton";
import { connect } from "react-redux";
import InviteListItem from "../../components/inviteListItem";
import Invitation from "../../components/invitation";
import { List } from "semantic-ui-react";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: null,
      invitation: null,
      index: null
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   * This is done to initialize the profile page and set it up with information
   *
   * @memberof ProfilePage
   */
  initializePage() {
    if (
      this.props.notifications &&
      (!this.state.notifications ||
        this.props.notifications.length !== this.state.notifications.length)
    ) {
      this.setState({ notifications: this.props.notifications });
    }
  }
  componentDidUpdate() {
    this.initializePage();
  }
  componentWillMount() {
    this.initializePage();
  }

  handleOnClick(index) {
    let newNotifications = this.state.notifications.slice();
    newNotifications[index].unread = false;
    if (index === this.state.index) {
      this.setState({
        invitation: null,
        index: null,
        notifications: newNotifications
      });
    } else
      this.setState({
        invitation: this.state.notifications[index],
        index: index,
        notifications: newNotifications
      });
  }

  render() {
    let listOfNotifications;
    if (this.state.notifications) {
      listOfNotifications = this.state.notifications.map(
        (notification, index) => (
          <InviteListItem
            name={notification.name}
            teamLeader={notification.teamLeader}
            key={index}
            groupId={notification.groupId}
            unread={notification.unread}
            onClick={() => this.handleOnClick(index)}
          />
        )
      );
    }
    const invitation = this.state.invitation;
    let notificationStillExists;
    if (invitation) {
      notificationStillExists = this.props.notifications.find(notification => {
        return notification.groupId === invitation.groupId;
      });
    }
    return (
      <div>
        <List selection verticalAlign="middle">
          {listOfNotifications}
        </List>
        {invitation &&
          notificationStillExists &&
            <Invitation
              teamLeader={invitation.teamLeader}
              name={invitation.name}
              groupId={invitation.groupId}
              description={invitation.description}
            />
          }
      </div>
    );
  }
}

const mapToState = state => ({
  notifications: state.user.user ? state.user.user.notifications : []
});
export default connect(mapToState)(Notifications);
