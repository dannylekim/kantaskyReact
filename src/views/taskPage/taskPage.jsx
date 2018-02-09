import React from "react";
import ListOfTasks from "../../components/listOfTasks";
import { getUsersTasks } from "../../redux/task/taskActionDispatcher";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: null
    };

    this.sortOutTasks = this.sortOutTasks.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    const payload = jwt.decode(token);
    this.props.getUsersTasks(payload.id);
  }

  componentDidMount(){
    this.sortOutTasks(this.props.tasks);
  }


 
  

  sortOutTasks(tasks) {
    // let taskList = {};
    // for (let task of tasks) {
    //   if (!taskList[task.category]) {
    //     taskList[task.category] = [];
    //   }
    //   taskList[task.category].push(task);
    // }

    this.setState({ taskList: tasks });
  }

  render() {
    return (
      <div>
        {this.props.tasks && <ListOfTasks items={this.props.tasks} category={"Misc."}/>}
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ tasks: state.task.personalTasks });
const mapDispatch = {
  getUsersTasks
};
export default connect(mapState, mapDispatch)(TaskPage);
