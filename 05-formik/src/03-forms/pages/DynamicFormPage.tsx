import {Formik, Form} from 'formik'

import * as Yup from 'yup'

import { MySelect, MyTextInput } from '../components';

import formJSON from '../data/custom-form.json';

interface IInitialValues {
  [key: string]: any;
}

const initialValues: IInitialValues = {}
const requiredFields: IInitialValues = {}

for(const input of formJSON) {
  initialValues[input.name] = input.value || '';
  
  if(!input.validations) continue;

  let schema = Yup.string();

  for(const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required('This field is required');
    }

    if(rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 1, 
        `This field must be at least ${(rule as any).value || 1} characters`
      );
    }

    if(rule.type === 'email') {
      schema = schema.email('This field must be a valid email');
    }

    // ..otras reglas
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields });

export const DynamicFormPage = () => {

  const onSubmit = (values: IInitialValues) => {
    console.log(values)
  }

  return (
    <div>
      <h1>DynamicFormPage</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleReset }) => (
          <Form noValidate>

            {formJSON.map(({ label, name, type, placeholder, options }) => {

              if(
                type === 'input' || 
                type === 'password' || 
                type === 'email'
              ) {
                return (
                  <MyTextInput 
                    key={name}
                    label={label}
                    name={name}
                    type={(type as any)}
                    placeholder={placeholder} />
                )
              } else if ( type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Seleccione una opción</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                  </MySelect>
                )
              }

              throw new Error(`Tipo de input no soportado: ${type}`)
            })}

            <button type="button" onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
