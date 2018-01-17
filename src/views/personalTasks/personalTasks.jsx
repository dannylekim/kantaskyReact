import React from "react";
import { login } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";
import GroupCard from "../../components/groupCard";

class personalTasks extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <GroupCard />;
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state => ({});
const mapDispatch = { login };
export default connect(mapState, mapDispatch)(personalTasks);
