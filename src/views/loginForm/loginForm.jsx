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
import style from "./loginFormStyle"
import Particles from "react-particles-js";
import { login } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

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
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: undefined });
    this.props.login(this.state);
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
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
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
        {/* Particles.js */}
        {this.state.mountParticles && (
          <Particles canvasClassName="particle" params={particles} />
        )}
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
                  header="Your user registration was succesful!"
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
const mapDispatch = { login };
export default connect(mapState, mapDispatch)(loginForm);
