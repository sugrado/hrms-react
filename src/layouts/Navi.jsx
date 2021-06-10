import React from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="small">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Employer">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Button inverted color="green">
                    Register
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button inverted color="olive">
                    Login
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button.Group>
                <Button inverted color="green">
                  Register
                </Button>
                <Button.Or />
                <Button inverted color="olive">
                  Login
                </Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
