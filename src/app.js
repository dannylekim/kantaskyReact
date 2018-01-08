import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import Main from "./views/Main/main"
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;
