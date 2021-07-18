import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import FavouriteService from "../../services/FavouriteService";

export default function MyFavouritesList() {
  const [favourites, setFavourites] = useState([]);
  let favouriteService = new FavouriteService();
  let history = useHistory();
  function listFavourites() {
    favouriteService.getByCandidateId(28).then((res) => {
      setFavourites(res.data.data);
      console.log(res.data.data);
    });
  }
  useEffect(() => {
    listFavourites();
  }, []);

  function discard(fav) {
    favouriteService.discard(fav).then((res) => {
      toast.success(res.data.message);
      listFavourites();
    });
  }

  function goToAdvert(jobAdvertisementId) {
    history.push(`/advertisements/${jobAdvertisementId}`);
  }

  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Salary Range</Table.HeaderCell>
            <Table.HeaderCell>Remote</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Employment T.</Table.HeaderCell>
            <Table.HeaderCell>Discard</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {favourites.map((fav) => (
            <Table.Row key={fav.id}>
              <Table.Cell>
                {fav.jobAdvertisement.employer.companyName}
              </Table.Cell>
              <Table.Cell>
                {fav.jobAdvertisement.minSalary}-
                {fav.jobAdvertisement.maxSalary}
              </Table.Cell>
              <Table.Cell>
                {fav.jobAdvertisement.remote ? "Yes" : "No"}
              </Table.Cell>
              <Table.Cell>{fav.jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{fav.jobAdvertisement.jobPosition.name}</Table.Cell>
              <Table.Cell>
                {fav.jobAdvertisement.employmentType.name}
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <Button
                  color="red"
                  icon="remove"
                  onClick={() => discard(fav)}
                ></Button>
                <Button
                  color="green"
                  icon="arrow alternate circle right icon"
                  onClick={() => goToAdvert(fav.jobAdvertisement.id)}
                ></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
