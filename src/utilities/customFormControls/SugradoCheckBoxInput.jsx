import { useField } from "formik";
import { FormField } from "semantic-ui-react";

export default function SugradoCheckBoxInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <FormField error={meta.touched && !!meta.error} style={{ float: "left" }}>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {" --> " + children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormField>
  );
}
