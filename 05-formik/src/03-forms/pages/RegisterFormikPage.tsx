
import { useFormik, Formik, Form } from 'formik';

import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput';

const initialValues = {
  name: '',
  email: '',
  password1: '',
  password2: '',
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Debe de tener 2 caracteres o más')
    .max(15, 'Debe de tener 15 caracteres o menos')
    .required('Requerido'),
  email: Yup.string()
    .email('Debe de ser un email válido')
    .required('Requerido'),
  password1: Yup.string()
    .min(6, 'Debe de tener 6 caracteres o más')
    .required('Requerido'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
    .required('Requerido'),
});

export const RegisterFormikPage = () => {

  const onSubmit = (e: any) => {
    console.log(e)
  }

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <MyTextInput 
              label='Nombre' 
              name="name" 
              placeholder='Nombre '/>

            <MyTextInput 
              label='Correo' 
              name="email" 
              placeholder='Correo'/>

            <MyTextInput 
              label='Password' 
              name="password1" 
              type="password" 
              placeholder='******'/>

            <MyTextInput 
              label='Repetir Password'
              name="password2" 
              type="password" 
              placeholder='******'/>

            <button type="submit">Create</button>

            <button type="button" onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
