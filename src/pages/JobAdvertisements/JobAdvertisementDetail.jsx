import React, { useEffect } from "react";
import { Card, Button, Icon, Grid, Image } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});
  
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((res) => setJobAdvertisement(res.data.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Card fluid style={{marginLeft: "12px"}}>
              <Card.Content extra style={{ textAlign: "right" }}>
                <Button color="green">
                  <Icon name="plus" />
                  Add to favorites
                </Button>
              </Card.Content>
              <Card.Content style={{ textAlign: "left" }}>
                <Card.Header>
                  {jobAdvertisement.jobPosition?.name} -{" "}
                  {jobAdvertisement.city?.name}
                </Card.Header>
                <Card.Description>
                  {jobAdvertisement.content} <hr />
                  Employment Type: {jobAdvertisement.employmentType?.name} <hr />
                  Salary Range: {jobAdvertisement.minSalary}$ - {jobAdvertisement.maxSalary}$ <hr />
                  Open Position Number: {jobAdvertisement.openPositionNumber} person <hr />
                  Published At: {jobAdvertisement.releaseDate} <br />
                  Deadline: {jobAdvertisement.applicationDeadline} <hr />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card>
              <Image src="https://turklegal.com.tr/en/news/media/posts/65/header_011.jpg" />
              <Card.Content style={{ textAlign: "left" }}>
                <Card.Header>Company Info</Card.Header>
                <Card.Meta>Location: {jobAdvertisement.city?.name}</Card.Meta>
                <Card.Description>
                  Name: {jobAdvertisement.employer?.companyName} <br />
                  Web: {jobAdvertisement.employer?.webAddress}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
