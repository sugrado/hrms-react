import React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementsList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then((result) => {
      setJobAdvertisements(result.data.data);
    });
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Application Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.employer.companyName}</Table.Cell>
              <Table.Cell>{advert.jobPosition.name}</Table.Cell>
              <Table.Cell>{advert.city.name}</Table.Cell>
              <Table.Cell>{advert.releaseDate}</Table.Cell>
              <Table.Cell>{advert.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
