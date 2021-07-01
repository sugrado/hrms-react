import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import SugradoTextInput from "../../utilities/customFormControls/SugradoTextInput";

export default function JobAdvertisementAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <SugradoTextInput name="productName" placeholder="Ürün adı" />
        <SugradoTextInput name="unitPrice" placeholder="Ürün fiyatı" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
