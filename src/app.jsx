import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Main from "./views/main/main";
import Personal from "./views/personalTasks/personalTasks";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import noRequireAuth from "./config/noRequireAuth";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={noRequireAuth(Login)} />
        <Route path="/signup" component={noRequireAuth(SignUp)} />
        <Route exact path="/" component={requireAuth(Main)} />
        <Route path="/personal" component={requireAuth(Personal)} />
      </Switch>
    );
  }
}

export default App;
