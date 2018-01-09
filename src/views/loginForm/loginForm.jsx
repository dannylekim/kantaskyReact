import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Icon
} from "semantic-ui-react";
import "./loginForm.css";
import kantaskyUser from "../../api/userApi";
import { Link } from "react-router-dom";

class loginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      error: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.verifyNull = this.verifyNull.bind(this);
  }

  async login() {
    try {
      const response = await kantaskyUser.authenticate(this.state);
      alert(response.data.message);
    } catch (err) {
      this.setState({ error: err.data });
    }
  }

  verifyNull() {
    if (!this.state.username) {
      this.setState({ error: "Please enter a username" });
      return false;
    }

    if (!this.state.password) {
      this.setState({ error: "Please enter a password" });
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    this.setState({ error: undefined });
    const isValid = this.verifyNull();
    if (isValid) this.login();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              Kantasky
            </Header>

            {this.state.error && (
              <Segment inverted color="red" tertiary>
                <Icon name="warning" />
                {error}
              </Segment>
            )}
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked secondary>
                <Form.Input
                  fluid
                  icon="user"
                  name="username"
                  iconPosition="left"
                  placeholder="Username or E-mail"
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  name="password"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleInputChange}
                />
                <Button primary fluid type="submit">
                  Login
                </Button>
                <Divider horizontal>Or</Divider>
                <Link to="/signup">
                  <Button secondary fluid>
                    Sign Up Now
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default loginForm;
