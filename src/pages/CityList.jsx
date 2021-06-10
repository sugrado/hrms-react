import React from "react";
import { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import CityService from "../services/CityService";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
  }, []);

  return (
    <div>
      <Menu pointing vertical>
        <Menu.Header
          style={{
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "medium",
            fontWeight: "bold",
          }}
        >
          Cities
        </Menu.Header>
        {cities.map((city) => (
          <Menu.Item key={city.id} name={city.name} />
        ))}
      </Menu>
    </div>
  );
}
