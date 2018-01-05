import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import kantaskyUser from "../../api/userApi";

class signupForm extends React.Component {
    constructor() {
        super(); //handle bindings differently in a more clean manner
    
        this.state = {
          username: undefined,
          password: undefined,
          firstName: undefined, 
          lastName: undefined,
          email: undefined,
          confirmPassword: undefined,
        };
    
        this.signUp = this.signUp.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
      }
    
      async signUp(event) {
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

      handleConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
      }

      handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
      }

      handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
      }

      handleEmailChange(e) {
        this.setState({ email: e.target.value });
      }

      


  render() {
    return (
      <div className="signup-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              Create a Kantasky Account!
            </Header>
            <Form size="large" onSubmit={this.signUp}>
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder="First Name"
                  type="text"
                  onChange={this.handleFirstNameChange}
                />
                <Form.Input
                  fluid
                  placeholder="Last Name"
                  type="text"
                  onChange={this.handleLastNameChange}
                />
                 <Form.Input
                  fluid
                  placeholder="Email"
                  type="text"
                  onChange={this.handleEmailChange}
                />
                <Form.Input
                  fluid
                  placeholder="Username"
                  type="text"
                  onChange={this.handleUsernameChange}
                />
                  <Form.Input
                  fluid
                  placeholder="Password"
                  type="password"
                  onChange={this.handlePasswordChange}
                />
                <Form.Input
                  fluid
                  placeholder="Confirm Password"
                  type="password"
                  onChange={this.handleConfirmPasswordChange}
                />
                <Button color="blue" fluid size="large" type="submit">
                  Sign-up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default signupForm