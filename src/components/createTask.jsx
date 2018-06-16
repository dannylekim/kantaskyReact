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
      showModal: false
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

  addTask() {
    let newTask = Object.assign({}, this.state);
    newTask.showModal = undefined;
    this.props.createTaskInGroup(this.state, this.props.groupId);
    const nullState = {
      name: null,
      dueDate: null,
      category: "Misc.",
      importance: "normal",
      status: "pending",
      description: null
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
        <Modal.Header>Create a Task in this group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm
              onClickFunction={this.handleInputChange}
              categories={this.props.categories}
              currentCategoryValue={this.state.category}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inver ted color="green" onClick={this.addTask}>
            <Icon name="checkmark" /> Confirm
          </Button>
          <Button inverted color="red" onClick={this.toggleAddModal}>
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
