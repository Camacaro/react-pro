import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { Home } from "../pages/Home";
import { Storybook } from "../pages/Storybook";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />

          <ul>
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
                to="/home">
                  Home
                </NavLink>
            </li>

            <li>
              <NavLink 
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
                to="/about">
                  About
                </NavLink>
            </li>

            <li>
              <NavLink 
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
                to="/users">
                  Users
                </NavLink>
            </li>

            <li>
              <NavLink 
                className={({ isActive }) => isActive ? 'nav-active' : ''} 
                to="/storybook">
                  My Storybook
                </NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path="about" element={<h1> About Page </h1>} />
          <Route path="users" element={<h1> User Page </h1>} />
          <Route path="storybook" element={<Storybook />} />
          <Route path="home" element={<Home />} />

          

          {/* Redirect */}
          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
