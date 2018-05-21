import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Personal from "./views/taskPage/taskPage";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import GroupPage from "./views/groups/groupPage";
import GroupTask from "./views/groups/groupTasks";
import Mail from "./views/notifications/notifications";
import noRequireAuth from "./config/noRequireAuth";
import TabularMenu from "./components/tabularMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  componentWillMount() {
    this.props.checkToken();
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={noRequireAuth(Login)} />
        <Route path="/signup" component={noRequireAuth(SignUp)} />
        <div style={{ marginTop: 0.25 + "em", paddingLeft: 0.1 + "em" }}>
          <TabularMenu />
          <div
            style={{
              marginLeft: 1 + "em",
              marginRight: 1 + "em",
              marginTop: 1 + "em"
            }}
          >
              <Route exact path="/" component={requireAuth(Personal)} />
              <Route path="/personal" component={requireAuth(Personal)} />
              <Route path="/mail" component={requireAuth(Mail)} />
              <Route path="/groups" component={requireAuth(GroupPage)} />
              <Route
                path="/group/:groupId"
                component={requireAuth(GroupTask)}
              />
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;
