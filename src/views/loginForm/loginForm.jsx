import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import "./loginForm.css";
import kantaskyUser from "../../api/userApi";

class loginForm extends React.Component {
  constructor() {
    super(); //handle bindings differently in a more clean manner

    this.state = {
      username: "",
      password: ""
    };

    this.login = this.login.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  async login(event) {
    try {
      const response = await kantaskyUser.authenticate(this.state);
      alert(response.data.message);
    } catch (err) {
      console.log(err);
    }
  }

  //setters
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  //are these needed?
  //componentDidMount
  //componentUnmount

  render() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.login}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username or E-mail"
                  onChange={this.handleUsernameChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handlePasswordChange}
                />
                <Button color="blue" fluid size="large" type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to Kantasky? <a>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default loginForm;
