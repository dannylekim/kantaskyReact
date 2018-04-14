import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { editTask } from "../redux/task/taskActionDispatcher";

class EditTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    let updatedTask = Object.assign({}, this.props.task)
    delete updatedTask.showModal
    this.props.editTask(updatedTask);
    this.props.toggleModal();
  }

  render() {
    return (
      <Button inverted color="blue" onClick={this.handleClick}>
        <Icon name="checkmark" /> Save Changes
      </Button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatch = {
  editTask
};
export default connect(mapStateToProps, mapDispatch)(EditTaskButton);
