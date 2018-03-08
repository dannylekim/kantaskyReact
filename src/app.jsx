import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Main from "./views/main/main";
import Personal from "./views/taskPage/taskPage";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import MenuSidebar from "./components/menuSidebar";
import ProfilePage from "./views/profile/profilePage";
import GroupPage from "./views/groups/groupPage";
import GroupTask from "./views/groups/groupTasks";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import noRequireAuth from "./config/noRequireAuth";

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
    this.props.checkToken()
  }
  
  render() {
    
    return (
      <Switch>
        <Route path="/login" component={noRequireAuth(Login)} />
        <Route path="/signup" component={noRequireAuth(SignUp)} />
        <Sidebar.Pushable as={Segment}>
          <MenuSidebar visible={this.state.visible} />
          <Sidebar.Pusher style={{ height: 100 + "vh" }}>
            <Menu.Item onClick={this.toggleVisibility}>
              <Icon color="blue" size="big" name="sidebar" />
            </Menu.Item>
            <div style={{ marginLeft: 2 + "em", marginTop: 1 + "em" }}>
              <Route exact path="/" component={requireAuth(Main)} />
              <Route path="/profile" component={requireAuth(ProfilePage)} />
              <Route path="/personal" component={requireAuth(Personal)} />
              <Route exact path="/groups" component={requireAuth(GroupPage)} />
              <Route
                path="/groups/:groupId"
                component={requireAuth(GroupTask)}
              />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Switch>
    );
  }
}

export default App;
