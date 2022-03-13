import { useField } from "formik"

interface Props {
  name: string
  label: string
  [key: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {

  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select className="text-input" {...field} {...props} />

      {
        (meta.touched && meta.error) && (
          <span className="error">{meta.error}</span>
        )
      }
    </>
  )
}
