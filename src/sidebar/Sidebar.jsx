import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaCogs,
  FaUsers,
  FaTags,
  FaHeadphones,
  FaMoneyBillWave,
} from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../assets/images/image1.png";

const Sidebar = () => {
  const location = useLocation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Check if the current route is a settings-related page
  useEffect(() => {
    if (location.pathname.startsWith("/settings")) {
      setIsSettingsOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="hidden lg:block bg-white py-4">
      {/* Logo */}
      <div className="max-w-[220px] mx-auto">
        <img src={logo} alt="Logo" />
      </div>

      <div className="max-w-[280px] mx-auto">
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 px-12 w-full cursor-pointer ${
                    isActive
                      ? "bg-[#043249] text-white font-medium rounded-l-[20px]"
                      : "text-black font-medium"
                  }`
                }
              >
                <HiViewGrid size={24} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 px-12 cursor-pointer ${
                    isActive
                      ? "bg-[#043249] text-white font-medium rounded-l-[20px]"
                      : "text-black font-medium"
                  }`
                }
              >
                <FaUsers size={24} />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 px-12 cursor-pointer ${
                    isActive
                      ? "bg-[#043249] text-white font-medium rounded-l-[20px]"
                      : "text-black font-medium"
                  }`
                }
              >
                <FaTags size={24} />
                <span>Categories</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/audios"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 px-12 cursor-pointer ${
                    isActive
                      ? "bg-[#043249] text-white font-medium rounded-l-[20px]"
                      : "text-black font-medium"
                  }`
                }
              >
                <FaHeadphones size={24} />
                <span>Audios</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 px-12 cursor-pointer ${
                    isActive
                      ? "bg-[#043249] text-white font-medium rounded-l-[20px]"
                      : "text-black font-medium"
                  }`
                }
              >
                <FaMoneyBillWave size={24} />
                <span>Pricing</span>
              </NavLink>
            </li>

            {/* Settings Dropdown Menu */}
            <li>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`flex items-center justify-between w-full p-2 px-12 cursor-pointer font-medium ${
                  location.pathname.startsWith("/settings")
                    ? "bg-[#043249] text-white rounded-l-[20px]"
                    : "text-black"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FaCogs size={24} />
                  <span>Settings</span>
                </div>
                {isSettingsOpen ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>

              {/* Submenu Items */}
              {isSettingsOpen && (
                <ul className="ml-10 mt-2 space-y-2 transition-all duration-300">
                  <li>
                    <NavLink
                      to="/settings/profile"
                      className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 px-10 cursor-pointer ${
                          isActive
                            ? "bg-[#043249] text-white rounded-l-[20px]"
                            : "text-black"
                        }`
                      }
                    >
                      <span>Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/settings/security"
                      className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 px-10 cursor-pointer ${
                          isActive
                            ? "bg-[#043249] text-white rounded-l-[20px]"
                            : "text-black"
                        }`
                      }
                    >
                      <span>Security</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/settings/notifications"
                      className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 px-10 cursor-pointer ${
                          isActive
                            ? "bg-[#043249] text-white rounded-l-[20px]"
                            : "text-black"
                        }`
                      }
                    >
                      <span>Notifications</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
