import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./groupCard.css"
import {searchTask} from "../redux/task/taskActionDispatcher"
import {searchGroup} from "../redux/group/groupActionDispatcher"
import {connect} from "react-redux"

const extra = (numberOfUsers, category) => (
  <div>
    <Label color="red">
      <Icon name="user" />
      {numberOfUsers} User{numberOfUsers > 1 && "s"}
    </Label>
    <Label color={category === "personal" ? "green" : "blue"}>{category}</Label>
  </div>
);

class GroupCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
    this.props.searchGroup("")
    this.props.searchTask("")
  };
  //TODO: Need to do an SPA way of routing. This forces a refreshes and there is a lag that comes along with it
  render() {
    //FIXME: This is a hack to have proper formatting and have this still SPA
    const description = this.props.description
      ? this.props.description
      : "No description available";

    return (
      <Card className="group">
        <Link to={"/group/" + this.props.id}>
          <Card
            href=""
            key={this.props.id}
            onClick={this.handleOnClick}
            header={this.props.name}
            meta={"Project Lead: " + this.props.teamLeader}
            description={description}
            extra={extra(this.props.users.length, this.props.category)}
            color="blue"
          />
        </Link>
      </Card>
    );
  }
}


const mapStateToProps = state => ({});
const mapDispatch = { searchGroup, searchTask };
export default connect(
  mapStateToProps,
  mapDispatch)(GroupCard);
