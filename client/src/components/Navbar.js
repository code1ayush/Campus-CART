import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const { toggleSidebar, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  const logToggle = () => {
    setShowLogout(!showLogout);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          logo
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={logToggle}>
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? `dropdown show-dropdown` : `dropdown`}>
            <button className="dropdown-btn">Logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
