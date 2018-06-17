import React from "react";
// import JoinGroupButton from "../../components/joinGroupButton";
import { connect } from "react-redux";
import InviteListItem from "../../components/inviteListItem";
import Invitation from "../../components/invitation";
import { List, Message, Divider, Header, Icon } from "semantic-ui-react";

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
        {this.state.notifications && listOfNotifications.length === 0 && (
          <Message warning>
            <Message.Header>You have no new mail!</Message.Header>
            <p>Please check back when you have mail!</p>
          </Message>
        )}

        <List
          selection
          divided
          verticalAlign="middle"
          size="big"
          style={{
            height: "20em",
            overflow: "auto",
            backgroundColor: "rgb(218, 229, 223, .50)"
          }}
        >
          <Header as="h2" style={{ marginTop: ".5em", marginLeft: ".5em" }}>
            <Icon name="mail" circular />
            <Header.Content>
              Your Notifications
              <Header.Subheader>Manage all your invitations</Header.Subheader>
            </Header.Content>
          </Header>
          {listOfNotifications}
        </List>

        <Divider inverted />
        {invitation &&
          notificationStillExists && (
            <Invitation
              teamLeader={invitation.teamLeader}
              name={invitation.name}
              groupId={invitation.groupId}
              description={invitation.description}
            />
          )}
      </div>
    );
  }
}

const mapToState = state => ({
  notifications: state.user.user ? state.user.user.notifications : []
});
export default connect(mapToState)(Notifications);
