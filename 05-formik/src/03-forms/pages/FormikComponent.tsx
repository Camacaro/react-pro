import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponent = () => {

  return (
    <div>
      <h1>Formik Component</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log('FormikBasicPage.onSubmit:', values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Debe de ser un email válido')
            .required('Requerido'),
        })}
      >
        {
          (formik) => (
            <Form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name='firstName' component="span" />
              
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name='lastName' component="span" />
              
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name='email' component="span" />
              
              <button type='submit' disabled={!formik.isValid}>Create</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
