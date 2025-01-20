import React from 'react';
import { FaHome} from 'react-icons/fa';
import { FaCogs } from "react-icons/fa";
function SideBar() {
  return (
    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
      <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 text-center max-lg:text-center">
        Menu
      </p>

      {/* Menu Links with Icons */}
      <div className="mt-6 space-y-4">
        {/* Home Link */}
        <a
          href="/home"
          className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
        >
          <FaHome className="text-xl" />
          <span className="text-lg font-medium">Home</span>
        </a>
        
        <a
          href="/settings"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <FaCogs className=" text-xl" />
          <span className="text-lg font-medium">Setting</span>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
