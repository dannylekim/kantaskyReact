import React from "react";
import Login from "./views/loginForm/loginForm";
import SignUp from "./views/signUpForm/signUpForm";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

export default App;
