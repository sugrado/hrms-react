import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function SugradoSelectBoxInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField>
      <label style={{ float: "left" }} htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <select {...field} {...props}>
        <option value="0">Select...</option>
        {props.options.map((res) => {
          return (
            <option key={res.id} value={res.id}>
              {res.name}
            </option>
          );
        })}
      </select>
      {meta.touched && meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}
