/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { toast } from "react-toastify";

export default function AdvertisementRequestsList() {
  const [advertRequests, setAdvertRequests] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();
  function listAdverts() {
    jobAdvertisementService
      .getAdvertisementRequests()
      .then((result) => setAdvertRequests(result.data.data));
  }
  useEffect(() => {
    listAdverts();
  }, []);

  const approve = (id) => {
    jobAdvertisementService.approve(id).then(() => {
      toast.success("Advert approved!");
      listAdverts();
    });
  };

  const cancel = (id) => {
    jobAdvertisementService.cancel(id).then(() => {
      toast.success("Advert cancelled!");
      listAdverts();
    });
  };

  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Salary Range</Table.HeaderCell>
            <Table.HeaderCell>Remote</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Employment Type</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {advertRequests.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.employer.companyName}</Table.Cell>
              <Table.Cell>
                {advert.minSalary}-{advert.maxSalary}
              </Table.Cell>
              <Table.Cell>{advert.remote ? "Yes" : "No"}</Table.Cell>
              <Table.Cell>{advert.city.name}</Table.Cell>
              <Table.Cell>{advert.jobPosition.name}</Table.Cell>
              <Table.Cell>{advert.employmentType.name}</Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <Button
                  color="green"
                  icon="check"
                  onClick={() => approve(advert.id)}
                ></Button>
                <Button
                  color="red"
                  icon="delete"
                  onClick={() => cancel(advert.id)}
                ></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
