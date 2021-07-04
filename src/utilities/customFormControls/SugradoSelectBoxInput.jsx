import { useField } from "formik";
export default function SugradoSelectBoxInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
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
        <div className="error">{meta.error}</div>
      ) : null}
      <br />
    </div>
  );
}
