import React from "react";
import { Menu } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobPositionService from "../../services/JobPositionService";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPositions().then((result) => {
      setJobPositions(result.data.data);
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
          Job Positions
        </Menu.Header>
        {
            jobPositions.map((jobPosition)=>(
                <Menu.Item key={jobPosition.id} name={jobPosition.name} />
            ))
        }
      </Menu>
    </div>
  );
}
