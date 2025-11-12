import { useState } from "react";
import { resList } from "../utils/mockData";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
          alt="logo"
        />
        <span className="text-lg font-semibold">Namaste React</span>
      </div>

      <nav>
        <ul className="flex items-center gap-6 text-gray-700">
          <li className="cursor-pointer hover:text-indigo-600" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-indigo-600" onClick={() => navigate("/about")}>About</li>
          <li className="cursor-pointer hover:text-indigo-600" onClick={() => navigate("/contact")}>Contact</li>
          <li className="cursor-pointer">Cart</li>
          <li className="ml-2">OnlineStatus: {onlineStatus ? " ✅" : "🔴"}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
