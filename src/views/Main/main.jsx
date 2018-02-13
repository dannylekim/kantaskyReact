import React from "react";
import { getUser } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";

class Main extends React.Component {

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = jwt.decode(token.replace("Bearer ", ""));
      this.props.getUser(payload.id);
    }
  }

  render() {
    // const user = this.props.user
    return (
      <div>
      </div>
     
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state =>({
  user: state.user.user
})
const mapDispatch = { getUser };
export default connect(mapState, mapDispatch)(Main);
