import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import style from "./signUpFormStyle"
import Particles from "react-particles-js";
import { signUp } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

class signupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: undefined,
      password: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      confirmPassword: undefined,
      mountParticles: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //These two allow for the page to not break when redirected from authorized Route
  componentDidMount() {
    this.setState({ mountParticles: true });
  }

  componentWillUnmount() {
    this.setState({ mountParticles: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: undefined });
    // const isValid = this.verifyNull();
    // if (isValid)
    this.props.signUp(this.state);
  }

  //TODO: CUSTOM VALIDATION

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
    const particles = {
      particles: {
        number: {
          value: 99,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: true,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
 
    return (
      <div>
        {style}
        {/* Particles.js Canvas */}
        {this.state.mountParticles && (
          <Particles canvasClassName="particle" params={particles} />
        )}
        <div className="signup-form">
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              {/* Header */}
              <Message>
                <Header as="h1" color="blue" textAlign="center">
                  Create a Kantasky Account!
                </Header>
              </Message>

              {/* Redux Errors */}
              {this.props.signUpErrors && (
                <Message
                  error
                  header="There were some errors with your submission. Please correct them"
                  list={this.props.signUpErrors}
                />
              )}

              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  {/* First Name */}
                  <Form.Input
                    fluid
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Last Name */}
                  <Form.Input
                    fluid
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Email */}
                  <Form.Input
                    fluid
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Username */}
                  <Form.Input
                    fluid
                    placeholder="Username"
                    type="text"
                    name="username"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Password */}
                  <Form.Input
                    fluid
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Confirm Password */}
                  <Form.Input
                    fluid
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleInputChange}
                    required
                  />

                  {/* Submit Form */}
                  <Button color="blue" fluid size="large" type="submit">
                    Sign-up
                  </Button>
                </Segment>
              </Form>

              {/* Redirect Message */}
              <Message>
                Already have an account?
                <Link to="/login"> Login</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ signUpErrors: state.user.signUpErrors });
const mapDispatch = { signUp };
export default connect(mapState, mapDispatch)(signupForm);
