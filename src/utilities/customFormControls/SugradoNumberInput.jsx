import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function SugradoNumberInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label style={{ float: "left" }} htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <input type="number" {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}
