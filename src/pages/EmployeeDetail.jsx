import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Form } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function EmployeeDetail() {
  let { id } = useParams();
  const [employee, setEmployee] = useState({});
  let employeeService = new EmployeeService();

  function getEmployee(id) {
    employeeService.getById(id).then((res) => {
      employee.id = res.data.data.id;
      formik.values.firstName = res.data.data.firstName;
      formik.values.lastName = res.data.data.lastName;
      formik.values.emailAddress = res.data.data.emailAddress;
      setEmployee(res.data.data);
    });
  }

  useEffect(() => {
    getEmployee(id);
  }, []);

  const schema = Yup.object({
    firstName: Yup.string().required("Please enter the first name."),
    emailAddress: Yup.string().required("Please enter the email address."),
    lastName: Yup.string().required("Please enter the last name."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      employee.firstName = formik.values.firstName;
      employee.lastName = formik.values.lastName;
      employeeService.update(employee).then((res) => {
        toast.success("Updated!");
        getEmployee(id);
      });
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>First Name</b>
          </label>
          <Form.Input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.firstName}
            </div>
          )}
        </Form.Field>
        <Form.Field>
          <label style={{ float: "left" }}>
            <b>Last Name</b>
          </label>
          <Form.Input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.lastName}
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
        <Button color="green" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
