import React from "react";
import { Card, Image } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementsList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getApprovedAdvertisements().then((result) => {
      setJobAdvertisements(result.data.data);
    });
  }, []);

  return (
    <div>
      <Card.Group>
        {jobAdvertisements.map((advert) => (
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
                  src="https://i.hizliresim.com/jqamjh0.png"
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
