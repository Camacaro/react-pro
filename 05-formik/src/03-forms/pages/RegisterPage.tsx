
import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    formData,
    handleChange,
    isValidEmail,
    resetForm,
  } = useForm({
    name: 'jesus',
    email: 'jesus@mail.com',
    password1: '123456',
    password2: '123456'
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={onSubmit} autoComplete="off">
        <input 
          type="text" 
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />

        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input 
          type="email" 
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {!isValidEmail(email) && <span>El email no es válido</span>}

        <input 
          type="password" 
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={handleChange}
        />

        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && <span> La contraseña debe ser mayor que 6 </span>}

        <input 
          type="password" 
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={handleChange}
        />

        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length < 6 && <span> La contraseña debe ser mayor que 6 </span>}
        {password2 !== password1 && <span>La contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>

        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
