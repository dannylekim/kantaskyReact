import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

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
      redirect: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/groups/" + this.props.id} />;
    }

    return (
      <Card
        href=""
        key={this.props.id}
        onClick={this.handleOnClick}
        header={this.props.name}
        meta={"Project Lead: " + this.props.teamLeader}
        description={this.props.description}
        extra={extra(this.props.users.length, this.props.category)}
        color="blue"
      />
    );
  }
}

export default GroupCard;
