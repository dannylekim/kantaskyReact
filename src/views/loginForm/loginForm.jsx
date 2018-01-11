import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider,
  Icon
} from "semantic-ui-react";
import "./loginForm.css";
import kantaskyUser from "../../api/userApi";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

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
        <Particles className="particle" params={particles} />
        <div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment color="blue" tertiary>
                <Header as="h1" color="blue" textAlign="center">
                  Kantasky
                </Header>
              </Segment>

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
      </div>
    );
  }
}

export default loginForm;
