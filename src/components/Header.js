import { useState } from "react";
import { resList } from "../utils/mockData";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
          alt="logo"
        />
      </div>
      <ul className="nav-items">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About </li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
