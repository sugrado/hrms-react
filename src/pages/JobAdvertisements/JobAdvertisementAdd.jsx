/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import SugradoTextAreaInput from "../../utilities/customFormControls/SugradoTextAreaInput";
import SugradoNumberInput from "../../utilities/customFormControls/SugradoNumberInput";
import SugradoDateTimeInput from "../../utilities/customFormControls/SugradoDateTimeInput";
import SugradoSelectBoxInput from "../../utilities/customFormControls/SugradoSelectBoxInput";
import CityService from "../../services/CityService";
import JobPositionService from "../../services/JobPositionService";
import EmploymentTypeService from "../../services/EmploymentTypeService";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let employmentTypeService = new EmploymentTypeService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
    jobPositionService.getJobPositions().then((result) => {
      setJobPositions(result.data.data);
    });

    employmentTypeService.getEmploymentTypes().then((result) => {
      setEmploymentTypes(result.data.data);
    });
  }, []);
  function addAdvert(params) {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .addAdvert(params)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => console.log(err));
  }
  const initialValues = {
    jobPosition: { id: "" },
    employmentType: { id: "" },
    employer: { id: 61 },
    city: { id: "" },
    content: "",
    minSalary: "",
    maxSalary: "",
    openPositionNumber: "",
    releaseDate: "",
    applicationDeadline: "",
    remote: false,
    status: true,
  };

  const schema = Yup.object({
    content: Yup.string().required("Please enter the advert content."),
    minSalary: Yup.number().typeError("This field required number type."),
    maxSalary: Yup.number().typeError("This field required number type."),
    openPositionNumber: Yup.number()
      .typeError("This field required number type.")
      .required("Please enter the open position number"),
    city: Yup.object().required("Please select the city."),
    jobPosition: Yup.object().required("Please select the job position"),
    employmentType: Yup.object().required("Please select the employment type."),
    remote: Yup.boolean().required("This field required"),
    releaseDate: Yup.date()
      .typeError("This field required date type.")
      .required("Please enter the release date"),
    applicationDeadline: Yup.date()
      .typeError("This field required date type.")
      .required("Please enter the deadline"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        addAdvert(values);
      }}
    >
      <Form
        className="ui form"
        style={{ paddingRight: "30em", marginLeft: "10em" }}
      >
        <SugradoSelectBoxInput label="City" name="city.id" options={cities} />
        <SugradoSelectBoxInput
          label="Job Position"
          name="jobPosition.id"
          options={jobPositions}
        />
        <SugradoSelectBoxInput
          label="Employment Type"
          name="employmentType.id"
          options={employmentTypes}
        />
        <label htmlFor="releaseDate" style={{ float: "left" }}>
          Release Date
        </label>
        <SugradoDateTimeInput name="releaseDate" placeholder="Release date" />

        <label htmlFor="applicationDeadline" style={{ float: "left" }}>
          Deadline
        </label>
        <SugradoDateTimeInput
          name="applicationDeadline"
          placeholder="Deadline"
        />
        <label htmlFor="openPositionNumber" style={{ float: "left" }}>
          Open Position Number
        </label>
        <SugradoNumberInput
          name="openPositionNumber"
          placeholder="Open position number"
        />
        <label htmlFor="minSalary" style={{ float: "left" }}>
          Min salary (Optional)
        </label>
        <SugradoNumberInput name="minSalary" placeholder="Minimum salary" />

        <label htmlFor="maxSalary" style={{ float: "left" }}>
          Max salary (Optional)
        </label>
        <SugradoNumberInput name="maxSalary" placeholder="Maximum salary" />
        <label htmlFor="content" style={{ float: "left" }}>
          Content
        </label>
        <SugradoTextAreaInput name="content" placeholder="Content" />
        <br />
        <Button color="green" type="submit">
          Add
        </Button>
      </Form>
    </Formik>
  );
}
