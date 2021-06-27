import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Menu>
        <Menu.Item>
          <Image
            avatar
            spaced="right"
            src="https://www.gencklavye.com/wp-content/uploads/2020/02/a-harfi-ile-baslayan-deyimler.jpg"
          />

          <Dropdown text="Welcome, Admin" pointing="top right">
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info" />
              <Dropdown.Item
                onClick={signOut}
                text="Çıkış Yap"
                icon="sign-out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
}
