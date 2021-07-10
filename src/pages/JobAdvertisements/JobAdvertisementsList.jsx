import React from "react";
import { Card, Image, Form, Label } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementsList() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getApprovedAdvertisements().then((result) => {
      setAllData(result.data.data);
      setFilteredData(result.data.data);
    });
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return (
        data.jobPosition.name.toLowerCase().search(value) !== -1 ||
        data.employmentType.name.toLowerCase().search(value) !== -1 ||
        data.employer.companyName.toLowerCase().search(value) !== -1
      );
    });
    setFilteredData(result);
  };

  return (
    <div>
      <Form>
        <label>Search Text:</label>
        <Form.Field inline>
          <input
            style={{ marginBottom: "20px" }}
            type="text"
            onChange={(event) => handleSearch(event)}
          />
        </Form.Field>
      </Form>
      <Card.Group>
        {filteredData.map((advert) => (
          <Card
            key={advert.id}
            fluid
            href={`/advertisements/${advert.id}`}
            style={{
              marginLeft: "15px",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            <Card.Content>
              {advert.remote ? (
                <Image
                  floated="right"
                  size="tiny"
                  src="https://i.hizliresim.com/8trbghf.jpg"
                />
              ) : (
                ""
              )}

              <Card.Header>{advert.jobPosition.name}</Card.Header>
              <Card.Meta>{advert.employer.companyName}</Card.Meta>
              <Card.Meta>{advert.employmentType.name}</Card.Meta>
              <Card.Description style={{ textAlign: "right" }}>
                Deadline: {advert.releaseDate}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
