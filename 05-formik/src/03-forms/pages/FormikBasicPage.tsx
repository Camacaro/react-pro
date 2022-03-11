import { useFormik, FormikErrors } from 'formik'

import '../styles/styles.css'

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = (values: IFormValues) => {
    const errors: FormikErrors<IFormValues> = {}

    if(!values.firstName) {
      errors.firstName = 'Required'
    } else if(values.firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if(!values.lastName) {
      errors.lastName = 'Required'
    } else if(values.lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log('FormikBasicPage.onSubmit:', values)
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic tutorial</h1>

      <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {(formik.errors.firstName && formik.touched.firstName) && 
          <span> {formik.errors.firstName} </span>}
        

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
          name="email" 
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {(formik.errors.email && formik.touched.email) && <span> {formik.errors.email} </span>}

        <button type='submit' disabled={!formik.isValid}>Create</button>

      </form>

    </div>
  )
}
