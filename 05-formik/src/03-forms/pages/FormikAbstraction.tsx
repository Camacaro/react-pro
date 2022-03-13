import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Mycheckbox } from '../components/Mycheckbox'
import { MySelect } from '../components/MySelect'
import { MyTextInput } from '../components/MyTextInput'

import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
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
          terms: Yup.boolean()
            .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'Esta opcion no es permitida')
            .required('Requerido'),
        })}
      >
        {
          (formik) => (
            <Form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>

              <MyTextInput 
                name='firstName'
                label='Nombre'
                placeholder='Ingrese su nombre'
              />

              <MyTextInput 
                name='lastName'
                label='lastName'
                placeholder='Ingrese su apellido'
              />

              <MyTextInput 
                name='email'
                label='Email Address'
                placeholder='Ingrese su email'
                type='email'
              />

              <MySelect name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="it-senior">it-senior</option>
                <option value="it-junior">it-junior</option>
              </MySelect>

              <Mycheckbox 
                name='terms'
                label='Terms & conditions'
              />
              
              <button type='submit' disabled={!formik.isValid}>Create</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
