import React, { useState, useEffect } from "react";
import EmployerService from "../../services/EmployerService";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function EmployerDetail() {
  let { id } = useParams();
  const [employer, setEmployer] = useState({});
  let employerService = new EmployerService();

  function getEmployer(id) {
    employerService.getEmployerById(id).then((res) => {
      formik.values.id = res.data.data.id;
      formik.values.companyName = res.data.data.companyName;
      formik.values.emailAddress = res.data.data.emailAddress;
      formik.values.phoneNumber = res.data.data.phoneNumber;
      formik.values.webAddress = res.data.data.webAddress;
      setEmployer(res.data.data);
    });
  }

  useEffect(() => {
    getEmployer(id);
  }, []);

  const schema = Yup.object({
    companyName: Yup.string().required("Please enter the company name."),
    emailAddress: Yup.string().required("Please enter the email address."),
    phoneNumber: Yup.string().required("Please enter the phone number."),
    webAddress: Yup.string().required("Please enter the web address."),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
      webAddress: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      employerService.getEmployerById(employer.id).then((res2) => {
        let newEmployer = res2.data.data;
        res2.data.data.newContent = null;
        newEmployer.companyName = formik.values.companyName;
        newEmployer.webAddress = formik.values.webAddress;
        newEmployer.phoneNumber = formik.values.phoneNumber;
        newEmployer.emailAddress = formik.values.emailAddress;
        var json = JSON.stringify(newEmployer);
        employerService
          .updateRequest({
            employerId: employer.id,
            newContent: json,
          })
          .then(() => {
            toast.success("Request sent!");
            getEmployer(id);
          });
      });
    },
  });

  return (
    <div>
      {employer.sent ? (
        <label>
          <b>
            Request sent! Your old user information will appear until the your
            request is approved.
          </b>
        </label>
      ) : (
        ""
      )}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>Company Name</b>
          </label>
          <Form.Input
            placeholder="Company Name"
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.companyName && formik.touched.companyName && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.companyName}
            </div>
          )}
        </Form.Field>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>Email Address</b>
          </label>
          <Form.Input
            placeholder="Email Address"
            type="text"
            name="emailAddress"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.emailAddress && formik.touched.emailAddress && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.emailAddress}
            </div>
          )}
        </Form.Field>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>Phone Number</b>
          </label>
          <Form.Input
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.phoneNumber}
            </div>
          )}
        </Form.Field>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>Web Address</b>
          </label>
          <Form.Input
            placeholder="Web Address"
            type="text"
            name="webAddress"
            value={formik.values.webAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.webAddress && formik.touched.webAddress && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.webAddress}
            </div>
          )}
        </Form.Field>
        <Button color="green" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
