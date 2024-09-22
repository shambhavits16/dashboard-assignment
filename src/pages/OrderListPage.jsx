// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { PiClipboardText } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";

const OrdersListPage = ({ theme, setLeftSidebarOpen }) => {
  const [data, setData] = useState([
    { key: '1', selected: false, orderID: '#CM9801', user: 'Natali Craig', avatar: '/Images/NataliCraig.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { key: '2', selected: false, orderID: '#CM9802', user: 'Kate Morrison', avatar: '/Images/KateMorrison.png', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { key: '3', selected: false, orderID: '#CM9803', user: 'Drew Cano', avatar: '/Images/DrewCano.png', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { key: '4', selected: true, orderID: '#CM9804', user: 'Orlando Diggs', avatar: '/Images/OrlandoDiggs.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { key: '5', selected: false, orderID: '#CM9805', user: 'Andi Lane', avatar: '/Images/AndiLane.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    { key: '6', selected: false, orderID: '#CM9801', user: 'Natali Craig', avatar: '/Images/NataliCraig.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { key: '7', selected: false, orderID: '#CM9802', user: 'Kate Morrison', avatar: '/Images/KateMorrison.png', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { key: '8', selected: false, orderID: '#CM9803', user: 'Drew Cano', avatar: '/Images/DrewCano.png', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { key: '9', selected: false, orderID: '#CM9804', user: 'Orlando Diggs', avatar: '/Images/OrlandoDiggs.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { key: '10', selected: false, orderID: '#CM9805', user: 'Andi Lane', avatar: '/Images/AndiLane.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },

  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map((item) => ({ ...item, selected: newSelectAll })));
  };

  const handleCheckboxChange = (key) => {
    const newData = data.map((item) => {
      if (item.key === key) return { ...item, selected: !item.selected };
      return item;
    });
    setData(newData);
    setSelectAll(newData.every((item) => item.selected));
  };

  const columns = [
    {
      title: <Checkbox checked={selectAll} onChange={handleSelectAllChange} />,
      dataIndex: "select",
      key: "select",
      render: (_, record) => (
        <Checkbox
          checked={record.selected}
          onChange={() => handleCheckboxChange(record.key)}
        />
      ),
      width: 30,
      align: "center",
    },
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={record.avatar}
            alt="user"
            className="w-8 h-8 rounded-full mr-2"
          />
          {text}
        </div>
      ),
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text, record) => (
        <div className="flex items-center">
          {text}
          <PiClipboardText
            className={`ml-2 ${record.key === hoveredRow ? "visible" : "invisible"
              }`}
          />
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          {text}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <div className="flex items-center">
          <span
            className="h-2 w-2 rounded-full mr-2"
            style={{ backgroundColor: getStatusColor(status).dot }}
          ></span>
          <span style={{ color: getStatusColor(status).text }}>{status}</span>
          <div
            className={`${hoveredRow === record.key ? "visible" : "invisible"}`}
          >
            <IoIosMore size={16} className="ml-5" />
          </div>
        </div>
      ),
    },
  ];

  const getStatusColor = (status) => {
    const statusColors = {
      "In Progress": { text: "#8A8CD9", dot: "#95A4FC" },
      Complete: { text: "#4AA785", dot: "#A1E3CB" },
      Pending: { text: "#59A8D4", dot: "#B1E3FF" },
      Approved: { text: "#FFC555", dot: "#FFE999" },
      Rejected: { text: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66", dot: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66" },
    };
    return statusColors[status] || { text: "#000", dot: "#000" };
  };

  useEffect(() => {
    setLeftSidebarOpen(false);

    return () => {
      setLeftSidebarOpen(true);
    };
  }, []);

  return (
    <div
      className={`p-4 font-inter ${theme === "dark" ? "bg-[#1C1C1C] text-white" : "bg-white text-black"
        }`}
    >
      <div className="my-2 mb-4 mx-2 font-semibold text-sm">Order List</div>
      <div
        className={`flex justify-between items-center px-6 py-2 ${theme === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]"
          } rounded-lg mb-4`}
      >
        <div className="space-x-4">
          <button className="focus:outline-none hover:text-gray-600">
            <AiOutlinePlus size={20} />
          </button>
          <button className="focus:outline-none hover:text-gray-600">
            <IoFilterOutline size={20} />
          </button>
          <button className="focus:outline-none hover:text-gray-600">
            <TbArrowsDownUp size={20} />
          </button>
        </div>
        <div className="relative float-right w-fit">
          <input
            type="text"
            placeholder="Search"
            className={`float-right pl-10 pr-4 py-2 ${theme === "light"
              ? "bg-[#1C1C1C0D] text-[#1C1C1C33]"
              : "bg-gray-950 text-gray-200"
              } text-sm font-normal font-inter rounded-lg focus:outline-none focus:ring-1 ${theme === "light" ? "focus:ring-gray-400" : "focus:ring-gray-500"
              }`}
          />
          <FiSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === "light" ? "text-gray-400" : "text-gray-300"
              }`}
            size={16}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr
              className={`${theme === "dark" ? "bg-[#FFFFFF0D] border-b border-[#FFFFFF1A] text-[#FFFFFF66]" : "bg-white text-[#1C1C1C66]"} border-b border-[#1C1C1C33]`}
            >
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  className="form-checkbox h-5 w-5"
                />
              </th>
              <th className="px-6 py-3 text-left font-normal text-xs">Order ID</th>
              <th className="px-6 py-3 text-left font-normal text-xs">User</th>
              <th className="px-6 py-3 text-left font-normal text-xs">Project</th>
              <th className="px-6 py-3 text-left font-normal text-xs">Address</th>
              <th className="px-6 py-3 text-left font-normal text-xs">Date</th>
              <th className="px-6 py-3 text-left font-normal text-xs">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.key}
                className={`${theme === "dark"
                  ? "bg-[#1C1C1C] text-[#FFFFFF] hover:bg-[#282828]"
                  : "bg-white text-[#1C1C1C] hover:bg-gray-50"
                  }`}
                onMouseEnter={() => setHoveredRow(item.key)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(item.key)}
                    className="form-checkbox h-4 w-4"
                  />
                </td>
                <td className="px-6 py-4 text-xs font-normal">{item.orderID}</td>
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
                <td className="px-6 py-4 text-xs font-normal">{item.project}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-xs font-normal">
                    {item.address}
                    <PiClipboardText
                      className={`ml-2 ${hoveredRow === item.key ? "visible" : "invisible"
                        }`}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-xs font-normal">
                    <FiCalendar className="mr-1" />
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
                    <div
                      className={`${hoveredRow === item.key ? "visible" : "invisible"
                        }`}
                    >
                      <IoIosMore size={16} className="ml-5" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded mx-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-lg mx-1 ${currentPage === index + 1 ? "bg-[#1C1C1C0D] text-black" : ""
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded mx-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OrdersListPage;
