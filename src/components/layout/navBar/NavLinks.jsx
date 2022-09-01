import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function NavLinks(props) {
  let activeClassName = "active";

  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate.push("/");
  }

  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink
          to="/accommodation "
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Accommodation
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Contact
        </NavLink>
      </li>
      {auth ? (
        <>
          <button className="adminSection" onClick={logout}>
            Log out
          </button>
          <li
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="adminSection"
          >
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Admin
            </NavLink>
          </li>
        </>
      ) : (
        <li
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="adminSection"
        >
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
