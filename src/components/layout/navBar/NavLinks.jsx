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
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accommodation "
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Accommodation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Contact
        </NavLink>
      </li>
      {auth ? (
        <>
          <button onClick={logout}>Log out</button>
          <li>
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
        <li>
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