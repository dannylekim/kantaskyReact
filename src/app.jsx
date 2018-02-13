import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Main from "./views/main/main";
import Personal from "./views/personalTasks/personalTasks";
import TaskPage from "./views/taskPage/taskPage";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import MenuSidebar from "./components/menuSidebar";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import noRequireAuth from "./config/noRequireAuth";

class App extends React.Component {
  constructor(){
    super()
    this.state = { visible: true };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
 
  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <MenuSidebar visible={this.state.visible}/>
        <Sidebar.Pusher style={{height:100 +'vh'}}>
          <Menu.Item onClick={this.toggleVisibility}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Switch>
            <Route path="/login" component={noRequireAuth(Login)} />
            <Route path="/signup" component={noRequireAuth(SignUp)} />
            <Route exact path="/" component={requireAuth(Main)} />
            <Route path="/personal" component={requireAuth(Personal)} />
            <Route path="/tasks" component={requireAuth(TaskPage)} />
          </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;
