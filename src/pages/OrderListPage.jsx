/**
 * OrdersListPage component renders a list of orders with features for selection,
 * search, sorting, and pagination. It also manages theme-based styling and animations.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.theme - The current theme of the application, either "light" or "dark".
 * @param {Function} props.setLeftSidebarOpen - Function to toggle the left sidebar's visibility.
 *
 * @returns {JSX.Element} The rendered OrdersListPage component.
 */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { PiClipboardText } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const OrdersListPage = ({ theme, setLeftSidebarOpen }) => {
  const [data, setData] = useState([
    {
      key: "1",
      selected: false,
      orderID: "#CM9801",
      user: "Natali Craig",
      avatar: "/Images/NataliCraig.png",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: "2",
      selected: false,
      orderID: "#CM9802",
      user: "Kate Morrison",
      avatar: "/Images/KateMorrison.png",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: "3",
      selected: false,
      orderID: "#CM9803",
      user: "Drew Cano",
      avatar: "/Images/DrewCano.png",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: "4",
      selected: true,
      orderID: "#CM9804",
      user: "Orlando Diggs",
      avatar: "/Images/OrlandoDiggs.png",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      key: "5",
      selected: false,
      orderID: "#CM9805",
      user: "Andi Lane",
      avatar: "/Images/AndiLane.png",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
    {
      key: "6",
      selected: false,
      orderID: "#CM9801",
      user: "Natali Craig",
      avatar: "/Images/NataliCraig.png",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: "7",
      selected: false,
      orderID: "#CM9802",
      user: "Kate Morrison",
      avatar: "/Images/KateMorrison.png",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: "8",
      selected: false,
      orderID: "#CM9803",
      user: "Drew Cano",
      avatar: "/Images/DrewCano.png",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: "9",
      selected: false,
      orderID: "#CM9804",
      user: "Orlando Diggs",
      avatar: "/Images/OrlandoDiggs.png",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      key: "10",
      selected: false,
      orderID: "#CM9805",
      user: "Andi Lane",
      avatar: "/Images/AndiLane.png",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },

  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  /**
   * Toggles selection of all orders.
   *
   * @function handleSelectAllChange
   * @returns {void}
   */
  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map((item) => ({ ...item, selected: newSelectAll })));
  };

  /**
 * Toggles the selection of a specific order.
 *
 * @function handleCheckboxChange
 * @param {string} key - The key of the order item to toggle.
 * @returns {void}
 */
  const handleCheckboxChange = (key) => {
    const newData = data.map((item) => {
      if (item.key === key) return { ...item, selected: !item.selected };
      return item;
    });
    setData(newData);
    setSelectAll(newData.every((item) => item.selected));
  };

  // Variants for row animations used in Framer Motion.
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  /**
 * Determines color scheme for a given order status.
 *
 * @function getStatusColor
 * @param {string} status - The current order status.
 * @returns {Object} - The text and dot color for the specified status.
 */
  const getStatusColor = (status) => {
    const statusColors = {
      "In Progress": { text: "#8A8CD9", dot: "#95A4FC" },
      Complete: { text: "#4AA785", dot: "#A1E3CB" },
      Pending: { text: "#59A8D4", dot: "#B1E3FF" },
      Approved: { text: "#FFC555", dot: "#FFE999" },
      Rejected: {
        text: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66",
        dot: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66",
      },
    };
    return statusColors[status] || { text: "#000", dot: "#000" };
  };

  /**
  * Effect to manage the sidebar's visibility on mount and unmount.
  *
  * @effect
  * @returns {void}
  */
  useEffect(() => {
    setLeftSidebarOpen(false);

    return () => {
      setLeftSidebarOpen(true);
    };
  }, [setLeftSidebarOpen]);

  return (
    <div className={`p-4 font-inter ${theme === "dark" ? "bg-[#1C1C1C] text-white" : "bg-white text-black"}`}>
      <div className="my-2 mb-4 mx-2 font-semibold text-sm">Order List</div>
      <div className={`flex justify-between items-center px-6 py-2 ${theme === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]"} rounded-lg mb-4`}>
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none hover:text-gray-600"
          >
            <AiOutlinePlus size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none hover:text-gray-600"
          >
            <IoFilterOutline size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none hover:text-gray-600"
          >
            <TbArrowsDownUp size={20} />
          </motion.button>

        </div>
        <div className="relative float-right w-fit">
          <input
            type="text"
            placeholder="Search"
            className={`float-right pl-9 pr-4 px-2 py-1 border ${theme === "light" ? "bg-white placeholder-[#1C1C1C33] border-[#1C1C1C1A]" : "bg-[#1C1C1C] placeholder-[#FFFFFF33] border-[#FFFFFF1A]"} font-inter rounded-lg focus:outline-none focus:ring-1 ${theme === "light" ? "focus:ring-gray-400" : "focus:ring-gray-500"
              }`}
          />
          <FiSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === "light" ? "text-[#1C1C1C33]" : "text-[#FFFFFF33]"}`}
            size={16}
          />
        </div>
      </div>
      <div className="overflow-x-hidden">
        <table className="min-w-full">
          <thead>
            <tr className={`${theme === "dark" ? "bg-[#FFFFFF0D] border-b border-[#FFFFFF1A] text-[#FFFFFF66]" : "bg-white text-[#1C1C1C66]"} border-b border-[#1C1C1C33]`}>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  className={`h-4 w-4 border cursor-pointer ${theme === "dark" ? "border-[#FFFFFF33]" : "border-[#1C1C1C33]"}`}
                />
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">
                Order ID
              </th>
              <th
                className="px-6 py-3 text-left font-normal text-xs cursor-pointer">
                User
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">
                Project
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">
                Address
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">
                Date
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">
                Status
              </th>
            </tr>
          </thead>
          <AnimatePresence>
            <tbody>
              {data.map((item) => (
                <motion.tr
                  key={item.key}
                  variants={rowVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: item.key * 0.05 }}
                  whileHover="hover"
                  className={`${theme === "dark" ? "bg-[#1C1C1C] text-[#FFFFFF] border-b border-[#FFFFFF1A] hover:bg-[#282828]" : "bg-white text-[#1C1C1C] border-b border-[#1C1C1C0D] hover:bg-gray-100"}`}
                  onMouseEnter={() => setHoveredRow(item.key)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleCheckboxChange(item.key)}
                      className={`form-checkbox h-4 w-4 transition-opacity duration-300 ease-in-out ${item.selected ? "opacity-100 hover:border" : "hover:border-gray-500 hover:border duration-300 transition-transform cursor-pointer"}`}
                    />
                  </td>
                  <td className="px-6 py-4 text-xs font-normal">
                    {item.orderID}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs font-normal">
                      <img
                        src={item.avatar}
                        alt="user"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {item.user}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-normal">
                    {item.project}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs font-normal">
                      {item.address}
                      <PiClipboardText
                        size={16}
                        className={`ml-1 ${hoveredRow === item.key ? "visible" : "invisible"}`}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs font-normal">
                      <FiCalendar
                        size={16}
                        className="mr-1"
                      />
                      {item.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs font-normal">
                      <span
                        className="h-2 w-2 rounded-full mr-2"
                        style={{
                          backgroundColor: getStatusColor(item.status).dot,
                        }}
                      ></span>
                      <span style={{ color: getStatusColor(item.status).text }}>
                        {item.status}
                      </span>
                      <div className={`${hoveredRow === item.key ? "visible" : "invisible"}`}>
                        <IoIosMore
                          size={16}
                          className="ml-5"
                        />
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded mx-1 ${currentPage === 1 ? "opacity-50" : ""}`}>
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-lg mx-1 ${theme === "dark" ? currentPage === index + 1 ? "bg-[#FFFFFF1A] text-white" : "bg-transparent text-gray-300 hover:bg-[#FFFFFF1A] hover:text-white" : currentPage === index + 1 ? "bg-[#1C1C1C0D] text-black" : "bg-transparent text-[#1C1C1C] hover:bg-gray-200 hover:text-black"}`}>
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded mx-1 ${currentPage === totalPages ? "opacity-50" : ""}`}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OrdersListPage;