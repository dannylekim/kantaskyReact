import React from "react";
import { Button, Menu, Modal, Icon } from "semantic-ui-react";
import { createTaskInGroup } from "../redux/task/taskActionDispatcher";
import TaskForm from "./taskForm";
import {connect} from "react-redux"

const AddTaskModal = ({ ...rest }) => (
  <Menu.Item>
    <Button color="green" inverted icon="add" {...rest} />
  </Menu.Item>
);

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      dueDate: null,
      category: "Misc.",
      importance: "normal",
      status: "pending",
      description: null
    };
    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  /**
   * Handles all input changes within the form
   *
   * @param {any} event
   * @memberof loginForm
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });
  }


//CLOSE MODAL TODO:
  addTask() {
    this.props.createTaskInGroup(this.state, this.props.groupId);
  }

  render() {
    return (
      <Modal trigger={<AddTaskModal />}>
        <Modal.Header>Create a Task in this group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm onClickFunction={this.handleInputChange} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="green" onClick={this.addTask}>
            <Icon name="checkmark" /> Confirm
          </Button>
          <Button basic color="red" >
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = state => ({});
const mapDispatch = {
  createTaskInGroup
};
export default connect(mapState, mapDispatch)(CreateTask);

