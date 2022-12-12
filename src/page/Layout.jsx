import { NavLink, Outlet } from "react-router-dom";
import "../css/layout.css";

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "green", fontWeight: 700 } : {}
          }
          to="/"
        >
          Home
        </NavLink>{" "}
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "green", fontWeight: 700 } : {}
          }
          to="/about"
        >
          About
        </NavLink>{" "}
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "green", fontWeight: 700 } : {}
          }
          to="/product"
        >
          Product
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
