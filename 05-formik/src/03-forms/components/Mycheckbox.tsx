import { ErrorMessage, useField } from "formik"

interface Props {
  name: string
  label: string
  [key: string]: any;
}

export const Mycheckbox = ({ label, ...props }: Props) => {

  const [field, meta] = useField({...props, type: 'checkbox'})

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      {/* {
        (meta.touched && meta.error) && (
          <span className="error">{meta.error}</span>
        )
      } */}

      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
