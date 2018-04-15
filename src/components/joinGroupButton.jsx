import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

class JoinGroupButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <Button inverted color="blue" onClick={this.handleClick}>
        <Icon name="checkmark" /> Join Group
      </Button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(JoinGroupButton);
