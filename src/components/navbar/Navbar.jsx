import React, { useState } from "react";
import { FaHome, FaCogs, FaBars } from "react-icons/fa";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useNavigate } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sm:hidden rounded-b-xl transition-all bg-gradient-to-b from-[#00344C] via-[black] to-[#00405B]">
      <nav className="text-white shadow-md p-4 flex justify-between items-center">
        <p className="text-lg font-bold tracking-tight">Dashboard</p>
        <button
          className="text-xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="text-white shadow-lg rounded-b-xl">
          <List>
            <ListItem
              className="hover:bg-gray-800 rounded-lg"
              onClick={() => navigate("/home")}
            >
              <ListItemPrefix>
                <FaHome className="text-white text-xl" />
              </ListItemPrefix>
              <a className="text-white hover:text-gray-700">Home</a>
            </ListItem>

            <ListItem
              className="hover:bg-gray-800 rounded-lg"
              onClick={() => navigate("/settings")}
            >
              <ListItemPrefix>
                <FaCogs className="text-white text-xl" />
              </ListItemPrefix>
              <a className="text-white hover:text-gray-700">Settings</a>
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
}

export default Navbar;
