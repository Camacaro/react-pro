import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />

          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/register">Register Page</NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-basic">Formik Basic Page</NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-yup">Formik Yup Page</NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Redirect */}
          <Route path="/*" element={ <Navigate to="/register" replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
