/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import EmployerService from "../../services/EmployerService";
import { toast } from "react-toastify";

export default function EmployerUpdateRequests() {
  const [updateRequests, setUpdateRequests] = useState([]);
  let employerService = new EmployerService();
  function listAdverts() {
    employerService.getUpdateRequests().then((result) => {
      console.log(result.data.data);
      setUpdateRequests(result.data.data);
    });
  }
  useEffect(() => {
    listAdverts();
  }, []);

  const approve = (id) => {
    employerService.approve(id).then(() => {
      toast.success("Update request approved!");
      listAdverts();
    });
  };

  const cancel = (id) => {
    employerService.cancel(id).then(() => {
      toast.success("Update request cancelled!");
      listAdverts();
    });
  };

  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>New Company Name</Table.HeaderCell>
            <Table.HeaderCell>New Web Address</Table.HeaderCell>
            <Table.HeaderCell>New Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Old Company Name</Table.HeaderCell>
            <Table.HeaderCell>Old Web Address</Table.HeaderCell>
            <Table.HeaderCell>Old Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {updateRequests.map((request) => (
            <Table.Row key={request.newContent.id}>
              <Table.Cell>{request.newContent.companyName}</Table.Cell>
              <Table.Cell>{request.newContent.webAddress}</Table.Cell>
              <Table.Cell>{request.newContent.phoneNumber}</Table.Cell>
              <Table.Cell>{request.oldContent.companyName}</Table.Cell>
              <Table.Cell>{request.oldContent.webAddress}</Table.Cell>
              <Table.Cell>{request.oldContent.phoneNumber}</Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <Button
                  color="green"
                  icon="check"
                  onClick={() => approve(request.oldContent.id)}
                ></Button>
                <Button
                  color="red"
                  icon="delete"
                  onClick={() => cancel(request.oldContent.id)}
                ></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
