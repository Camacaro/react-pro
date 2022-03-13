import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { 
  FormikBasicPage,
  FormikYupPage,
  RegisterPage,
  FormikComponent,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicFormPage
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />

          <ul>
            <li>
              <NavLink 
                to="/register"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Register Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/formik-basic"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Formik Basic Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/formik-yup"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Formik Yup Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/formik-component"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Formik Component Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/formik-abstraction"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Formik Abstraction Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/formik-register"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Formik Register Page
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/dynamic-form"
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
              >
                Dynamic Form Page
              </NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-component" element={<FormikComponent />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicFormPage />} />

          {/* Redirect */}
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
