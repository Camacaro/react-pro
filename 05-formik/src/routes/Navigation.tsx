import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
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
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/users">Users</NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path="about" element={<h1> About Page </h1>} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Redirect */}
          <Route path="/*" element={ <Navigate to="/register" replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
