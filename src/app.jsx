import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Main from "./views/Main/main"
import Personal from "./views/taskPage/taskPage";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import MenuSidebar from "./components/menuSidebar";
import GroupPage from "./views/groups/groupPage";
import GroupTask from "./views/groups/groupTasks"
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import noRequireAuth from "./config/noRequireAuth";

class App extends React.Component {
  constructor() {
    super();
    this.state = { visible: true };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <MenuSidebar visible={this.state.visible} />
        <Sidebar.Pusher style={{ height: 100 + "vh" }}>
          <Menu.Item onClick={this.toggleVisibility}>
            <Icon color="blue" size="big" name="sidebar" />
          </Menu.Item>
          <div style={{ marginLeft: 2 + "em", marginTop: 1 + "em" }}>
            <Switch>
              <Route path="/login" component={noRequireAuth(Login)} />
              <Route path="/signup" component={noRequireAuth(SignUp)} />
              <Route exact path="/" component={requireAuth(Main)} />
              <Route path="/personal" component={requireAuth(Personal)} />
              <Route exact path="/groups" component={requireAuth(GroupPage)} />
              <Route path='/groups/:groupId' component={requireAuth(GroupTask)} />
            </Switch>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;
