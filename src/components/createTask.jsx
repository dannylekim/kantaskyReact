import React from "react";
import { Button, Modal, Icon, Popup } from "semantic-ui-react";
import { createTaskInGroup } from "../redux/task/taskActionDispatcher";
import TaskForm from "./taskForm";
import { connect } from "react-redux";
import MenuButton from "./menuButton";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      dueDate: null,
      category: "Misc.",
      importance: "normal",
      status: "pending",
      description: null,
      showModal: false,
      users: null,
      user: null
    };
    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }
  /**
   * Handles all input changes within the form
   *
   * @param {any} event
   * @memberof loginForm
   */
  handleInputChange(event, data) {
    const value = data.value;
    const name = data.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });

    if (this.props.categories && name === "category") {
      let foundCategory = this.props.categories.find(category => {
        return category.key === value;
      });
      if (!foundCategory) {
        this.props.categories.push({ key: value, text: value, value: value });
      }
    }
  }

  toggleAddModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  componentWillReceiveProps(){
    if(this.props.group && !this.state.users){
      const usersKeyObject = this.props.group.users.map((user) => {
        return {key: user.userId, text: user.userName || user.userId, value: user.userId}
      })

      this.setState({users: usersKeyObject})
    }
  }

  addTask() {
    let newTask = Object.assign({}, this.state);
    newTask.showModal = undefined;
    newTask.users = undefined
    this.props.createTaskInGroup(this.state, this.props.groupId, this.state.user);
    const nullState = {
      name: null,
      dueDate: null,
      category: "Misc.",
      importance: "normal",
      status: "pending",
      description: null,
      user: null
    };
    this.setState({ task: nullState });
    this.toggleAddModal();
  }

  render() {


    return (
      <Modal
        trigger={
          <Popup
            trigger={
              <MenuButton
                onClick={this.toggleAddModal}
                color="green"
                icon="add"
              />
            }
            content="Add a Task"
            size="tiny"
            position="bottom center"
          />
        }
        open={this.state.showModal}
        onClose={this.toggleAddModal}
      >
        <Modal.Header>Create a Task</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm
              onClickFunction={this.handleInputChange}
              categories={this.props.categories}
              state={this.state}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            inverted
            color="green"
            onClick={this.addTask}
            disabled={!this.state.name}
          >
            <Icon name="checkmark" /> Confirm
          </Button>
          <Button basic onClick={this.toggleAddModal}>
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
export default connect(
  mapState,
  mapDispatch
)(CreateTask);
