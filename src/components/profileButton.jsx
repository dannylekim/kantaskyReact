import React from "react";
import { Icon, Image } from "semantic-ui-react";

class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <span>
        <Icon name="user circle"/> Danny Le Kim
      </span>
    );
  }
}

export default ProfileButton;
