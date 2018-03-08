import React from "react"
import {Menu, Button} from "semantic-ui-react"

const MenuButton = ({ ...rest, onClick, color, icon }) => (
    <Menu.Item onClick={onClick}>
      <Button color={color} inverted icon={icon} {...rest} />
    </Menu.Item>
  );

export default MenuButton