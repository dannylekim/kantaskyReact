import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeTask } from "../redux/task/taskActionDispatcher";

class removeTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.removeTask(this.props.id);
    this.props.modalFunction()
  }
  render() {
    return (
      <Button inverted color="red" onClick={this.remove}>
        <Icon name="checkmark" /> Remove Task
      </Button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatch = {
  removeTask
};
export default connect(mapStateToProps, mapDispatch)(removeTaskButton);
