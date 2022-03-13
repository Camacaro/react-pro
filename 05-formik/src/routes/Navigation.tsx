import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import logo from "../logo.svg";
import { FormikComponent } from '../03-forms/pages/FormikComponent';

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
          </ul>

        </nav>

        <Routes>
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-component" element={<FormikComponent />} />

          {/* Redirect */}
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
