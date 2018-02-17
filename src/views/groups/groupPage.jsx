import React from "react";
import GroupCard from "../../components/groupCard";
import { getUsersGroups } from "../../redux/group/groupActionDispatcher";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

class GroupPage extends React.Component {
    constructor(props){
        super()
    }

  //TODO: Eventually will have the groups saved as a state so can just pull information from there
  componentDidMount() {
    this.props.getUsersGroups()
  }

  render() {
    let groupCards;
    if (this.props.groups) {
      groupCards = this.props.groups.map(group => (
        <GroupCard
          key={group._id}
          name={group.name}
          category = {group.category}
          teamLeader={group.teamLeader.name}
          description={group.description}
          users={group.users}
          id={group._id}
        />
      ));
    }

    return <Card.Group>{groupCards}</Card.Group>;
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ groups: state.group.groups});
const mapDispatch = {
  getUsersGroups
};
export default connect(mapState, mapDispatch)(GroupPage);
