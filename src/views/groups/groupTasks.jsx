import React from "react";
import ListOfTasks from "../../components/listOfTasks";
import {
  getGroupsTasks,
  unmountGroupTasks
} from "../../redux/task/taskActionDispatcher";
import { connect } from "react-redux";
import { Card, Message } from "semantic-ui-react";
import TaskMenuBar from "../../components/taskMenuBar";
import { Droppable } from "react-beautiful-dnd";

class GroupTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: null,
      group: null,
      finishedRender: false
    };
    this.sortOutTasks = this.sortOutTasks.bind(this);
  }

  async componentWillMount() {
    const groupId = this.props.match.params.groupId;
    await this.props.getGroupsTasks(groupId);
    this.setState({ groupId: groupId, finishedRender: true });
  }

  componentWillUnmount() {
    this.props.unmountGroupTasks();
  }

  componentWillReceiveProps(){
    if (this.props.groups && !this.state.group) {
      const result = this.props.groups.filter(
        group => group._id === this.props.match.params.groupId
      );
      this.setState({ group: result[0] });
    }
  }

  sortOutTasks(tasks) {
    let taskList = {}; //and an object with all tasks separated by said category
    let categories = []; //create an array of categories
    for (let task of tasks) {
      //accumulate every single task
      if (!taskList[task.category]) {
        //if there hasn't been that said category before, create the array
        taskList[task.category] = [];
        categories.push(task.category); //push in a new category in the categories array
      }
      taskList[task.category].push(task); //push the task
    }
    return { taskList: taskList, categories: categories }; //return the task object
  }

  render() {
    let listOfTasks;
    let isEmpty = false;
    let categories = [{ key: "Misc.", text: "Misc", value: "Misc." }];
    if (this.props.tasks) {
      const taskObj = this.sortOutTasks(this.props.tasks);
      taskObj.categories.forEach(category => {
        if (category !== "Misc.")
          categories.push({ key: category, text: category, value: category });
      });

      listOfTasks = taskObj.categories.map((
        category,
        index //for every category, create a list of Tasks
      ) => {
        return (
          <Droppable droppableId={category}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ marginTop: "10px", marginLeft: "7px" }}
              >
                <ListOfTasks
                  dropColor={snapshot.isDraggingOver ? "lightgrey" : ""}
                  key={index}
                  items={taskObj.taskList[category]}
                  category={category}
                  color="blue"
                  categories={categories}
                />
              </div>
            )}
          </Droppable>
        );
      });
      listOfTasks.length === 0 ? (isEmpty = true) : (isEmpty = false);
    }

    //TODO: set the teamLeader props to the proper one
    return (
      <div>
        <TaskMenuBar
          groupId={this.state.groupId}
          group={this.state.group}
          isTeamLeader={true}
          categories={categories}
        />
        <Card.Group>{listOfTasks}</Card.Group>
        <br />
        {this.state.finishedRender &&
          isEmpty && (
            <Message warning>
              <Message.Header>There are currently no tasks!</Message.Header>
              <p>Click the + button to start creating tasks</p>
            </Message>
          )}
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({
  tasks: state.task.tasks,
  groups: state.group.groups
});
const mapDispatch = {
  getGroupsTasks,
  unmountGroupTasks
};
export default connect(
  mapState,
  mapDispatch
)(GroupTasks);
