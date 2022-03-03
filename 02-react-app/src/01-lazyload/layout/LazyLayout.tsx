import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import {LazyPage1, LazyPage2, LazyPage3} from '../pages/';


export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas Hijas iran aqui */}
      <ul>
        <li>
          <NavLink to="lazy1">Lazy Child 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy Child 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy Child 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        {/* Redirect */}
        <Route path="/*" element={ <Navigate to="lazy1"  replace/> } />
      </Routes>
    </div>
  )
}

export default LazyLayout