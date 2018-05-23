import React from "react";
import GroupCard from "../../components/groupCard";
import { getUsersGroups } from "../../redux/group/groupActionDispatcher";
import { connect } from "react-redux";
import { Card, Message } from "semantic-ui-react";
import GroupMenuBar from "../../components/groupMenuBar";

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //TODO: Eventually will have the groups saved as a state so can just pull information from there
  //TODO: When you "load" in from a saved bookmark, groups don't load.
  componentWillMount() {
    this.props.getUsersGroups();
  }

  render() {
    let groupCards;
    if (this.props.groups) {
      groupCards = this.props.groups.map(group => (
        <GroupCard
          key={group._id}
          name={group.name}
          category={group.category}
          teamLeader={group.teamLeader.name}
          description={group.description}
          users={group.users}
          id={group._id}
        />
      ));
    }

    return (
      <div>
        <GroupMenuBar />
        <Card.Group>{groupCards}</Card.Group>
        <br />
        {groupCards &&
          groupCards.length === 0 && (
            <Message warning>
              <Message.Header>You have no groups!</Message.Header>
              <p>Click the + button to start creating groups!</p>
            </Message>
          )}
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ groups: state.group.groups });
const mapDispatch = {
  getUsersGroups
};
export default connect(mapState, mapDispatch)(GroupPage);
