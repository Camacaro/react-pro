import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log('FormikBasicPage.onSubmit:', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('Debe de ser un email válido')
        .required('Requerido'),
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        
        {/* El getFieldProps establece a ese input name, value, onChange onBlur */}
        <input 
          type="text" 
          {...formik.getFieldProps('firstName')}
        />

        {(formik.errors.firstName && formik.touched.firstName) && 
          <span> {formik.errors.firstName} </span>}
        

        {/* El getFieldProps establece a ese input name, value, onChange onBlur */}
        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {(formik.errors.lastName && formik.touched.lastName) && <span> {formik.errors.lastName} </span>}

        <label htmlFor="lastName">Email Address</label>
        <input 
          type="email" 
          {...formik.getFieldProps('email')}
        />

        {(formik.errors.email && formik.touched.email) && <span> {formik.errors.email} </span>}

        <button type='submit' disabled={!formik.isValid}>Create</button>

      </form>

    </div>
  )
}
