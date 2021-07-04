/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import JobPositionService from "../../services/JobPositionService";
import SugradoTextInput from "../../utilities/customFormControls/SugradoTextInput";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  function addJobPosition(params) {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .add(params)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => console.log(err));
  }
  const initialValues = { name: "" };

  const schema = Yup.object({
    name: Yup.string().required("Please enter the job position name."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        addJobPosition(values);
      }}
    >
      <Form
        className="ui form"
        style={{ paddingRight: "30em", marginLeft: "10em" }}
      >
        <SugradoTextInput name="name" placeholder="Job position name" label="Name"/>
        <Button color="green" type="submit">
          Add
        </Button>
      </Form>
    </Formik>
  );
}
