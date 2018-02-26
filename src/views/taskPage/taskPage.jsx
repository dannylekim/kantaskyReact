import React from "react";
import ListOfTasks from "../../components/listOfTasks";
import { getUsersTasks } from "../../redux/task/taskActionDispatcher";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.sortOutTasks = this.sortOutTasks.bind(this);
  }

  //TODO: Eventually will have the user saved as a state so can just pull information from there
  componentWillMount() {
    this.props.getUsersTasks();
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
    if (this.props.tasks) {
      const taskObj = this.sortOutTasks(this.props.tasks);
      listOfTasks = taskObj.categories.map((
        category,
        index //for every category, create a list of Tasks
      ) => (
        <ListOfTasks
          key={index}
          items={taskObj.taskList[category]}
          category={category}
          color='blue'
        />
      ));
    }

    return <Card.Group>{listOfTasks}</Card.Group>;
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ tasks: state.task.tasks });
const mapDispatch = {
  getUsersTasks
};
export default connect(mapState, mapDispatch)(TaskPage);
