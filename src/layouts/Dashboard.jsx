import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementsList from "../pages/JobAdvertisements/JobAdvertisementsList";
import Sidebar from "./Sidebar";
import { Route } from "react-router";
import JobAdvertisementDetail from "../pages/JobAdvertisements/JobAdvertisementDetail";
import JobAdvertisementAdd from "../pages/JobAdvertisements/JobAdvertisementAdd";
import AdvertisementRequestsList from "../pages/JobAdvertisements/AdvertisementRequestsList";
import JobPositionAdd from "../pages/JobPositions/JobPositionAdd"
import { ToastContainer } from "react-toastify";
import EmployerDetail from "../pages/Employers/EmployerDetail";
import EmployerUpdateRequests from "../pages/Employers/EmployerUpdateRequests";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/" component={JobAdvertisementsList}/>
          <Route exact path="/advertisements" component={JobAdvertisementsList}/>
          <Route path="/advertisement-requests" component={AdvertisementRequestsList} />
          <Route path="/advertisements/:id" component={JobAdvertisementDetail}/>
          <Route path="/advertisement/add" component={JobAdvertisementAdd} />
          <Route path="/job-positions/add" component={JobPositionAdd} />
          <Route path="/employer/:id" component={EmployerDetail} />
          <Route path="/employer-update-requests" component={EmployerUpdateRequests} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
