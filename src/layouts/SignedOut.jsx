import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Menu position="right">
        <Dropdown item text="For Company">
          <Dropdown.Menu>
            <Dropdown.Item>Register</Dropdown.Item>
            <Dropdown.Item>Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button.Group>
            <Button onClick={signIn} inverted color="olive">
              Login
            </Button>
            <Button.Or />
            <Button inverted color="green">
              Register
            </Button>
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
}
