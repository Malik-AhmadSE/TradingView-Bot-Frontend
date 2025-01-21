import React from "react";
import { FaHome, FaCogs } from "react-icons/fa";
import { List, ListItem, ListItemPrefix, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  return (
    <Card className="hidden sm:block w-64 h-screen bg-gradient-to-b from-[#00344C] via-[black] to-[#00405B] text-white shadow-lg rounded-r-2xl rounded-l-none">
      <div className="px-3 pb-3 pt-8">
        <p className="mt-2 text-lg font-bold tracking-tight text-center text-white">
          Dashboard
        </p>

        <List className="mt-6">
          <ListItem
            className="hover:bg-gray-800 rounded-lg"
            onClick={() => navigate("/home")}
          >
            <ListItemPrefix>
              <FaHome className="text-white text-xl" />
            </ListItemPrefix>
            <a className="text-white hover:text-gray-400">Home</a>
          </ListItem>

          <ListItem
            className="hover:bg-gray-800 rounded-lg"
            onClick={() => navigate("/settings")}
          >
            <ListItemPrefix>
              <FaCogs className="text-white text-xl" />
            </ListItemPrefix>
            <a className="text-white hover:text-gray-400">Settings</a>
          </ListItem>
        </List>
      </div>
    </Card>
  );
}

export default SideBar;
