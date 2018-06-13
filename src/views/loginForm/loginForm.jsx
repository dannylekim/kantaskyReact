import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider,
  Icon,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import style from "./loginFormStyle";
import { login, getUser } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";
import { history } from "../../config/config";
import Particles from "../../components/particles";

class loginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      mountParticles: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //the two functions below allows rendering of particles.js without breaking the page when it's been redirected
  componentDidMount() {
    this.setState({ mountParticles: true, error: null });
  }

  componentWillUnmount() {
    this.setState({ mountParticles: false });
  }

  /**
   * Validates the values and then calls the login dispatcher taking in this state.
   *
   * @param {any} event
   * @memberof loginForm
   */
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: undefined });
    try {
      const userId = await this.props.login(this.state);
      this.props.getUser(userId);
      history.push("/personal");
    } catch (err) {}
  }

  /**
   * Handles all input changes within the form
   *
   * @param {any} event
   * @memberof loginForm
   */
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
    return (
      <div>
        {style}
        {/* Particles.js */}
        {this.state.mountParticles && <Particles />}
        <div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              {/* Header */}
              <Segment color="blue" tertiary>
                <Header as="h1" color="blue" textAlign="center">
                  Kantasky
                </Header>
              </Segment>

              {/* Redux Error */}
              {this.props.loginError && (
                <Segment inverted color="red" tertiary>
                  <Icon name="warning" />
                  {this.props.loginError}
                </Segment>
              )}

              {/* Redux Message */}
              {this.props.message && (
                <Message
                  success
                  header="Your user registration was successful!"
                  content={this.props.message}
                />
              )}
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked secondary>
                  {/* Username */}
                  <Form.Input
                    fluid
                    icon="user"
                    name="username"
                    iconPosition="left"
                    placeholder="Username or E-mail"
                    onChange={this.handleInputChange}
                  />

                  {/* Password */}
                  <Form.Input
                    fluid
                    icon="lock"
                    name="password"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleInputChange}
                  />

                  {/* Submit Form */}
                  <Button primary fluid type="submit">
                    Login
                  </Button>

                  {/* Redirect */}
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
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state => ({
  loginError: state.user.loginError,
  message: state.user.message
});
const mapDispatch = { login, getUser };
export default connect(
  mapState,
  mapDispatch
)(loginForm);
