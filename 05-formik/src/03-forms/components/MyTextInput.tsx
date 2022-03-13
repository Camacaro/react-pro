import { ErrorMessage, useField } from "formik"

interface Props {
  name: string
  label: string
  type?: 'text'|'email'|'password'|'checkbox';
  placeholder?: string;
  [key: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" className="text-input" autoComplete="off" {...field} {...props} />

      {/* {
        (meta.touched && meta.error) && (
          <span className="error">{meta.error}</span>
        )
      } */}

      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
