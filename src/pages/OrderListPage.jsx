// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Table, Checkbox, Button, Input } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AiOutlinePlus } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { PiClipboardText } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";

const OrdersListPage = () => {

  const [data, setData] = useState([
    { key: '1', selected: false, orderID: '#CM9801', user: 'Natali Craig', avatar: 'https://via.placeholder.com/150', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { key: '2', selected: false, orderID: '#CM9802', user: 'Kate Morrison', avatar: 'https://via.placeholder.com/150', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { key: '3', selected: false, orderID: '#CM9803', user: 'Drew Cano', avatar: 'https://via.placeholder.com/150', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { key: '4', selected: false, orderID: '#CM9804', user: 'Orlando Diggs', avatar: 'https://via.placeholder.com/150', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { key: '5', selected: true, orderID: '#CM9805', user: 'Andi Lane', avatar: 'https://via.placeholder.com/150', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map(item => ({ ...item, selected: newSelectAll })));
  };

  const handleCheckboxChange = key => {
    const newData = data.map(item => {
      if (item.key === key) return { ...item, selected: !item.selected };
      return item;
    });
    setData(newData);
    setSelectAll(newData.every(item => item.selected));
  };

  const columns = [
    {
      title: <Checkbox checked={selectAll} onChange={handleSelectAllChange} />,
      dataIndex: 'select',
      key: 'select',
      render: (_, record) => (
        <Checkbox
          checked={record.selected}
          onChange={() => handleCheckboxChange(record.key)}
        />
      ),
      width: 30,
      align: 'center',
    },
    {
      title: 'Order ID',
      dataIndex: 'orderID',
      key: 'orderID',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (text, record) => (
        <div className="flex items-center">
          <img src={record.avatar} alt="user" className="w-8 h-8 rounded-full mr-2" />
          {text}
        </div>
      ),
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => (
        <div className={`flex items-center`}>
          {text}
          <PiClipboardText className={`ml-2 ${record.key === hoveredRow ? 'visible' : 'invisible'}`} />
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => (
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          {text}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <div className={`flex items-center`}>
          <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: getStatusColor(status).dot }}></span>
          <span style={{ color: getStatusColor(status).text }}>{status}</span>
          <div className={`${hoveredRow === record.key ? 'visible' : 'invisible'}`}>
            <IoIosMore size={16} className='ml-5 text-black' />
          </div>
        </div>
      ),
    },
  ];

  const getStatusColor = status => {
    const statusColors = {
      'In Progress': { text: '#8A8CD9', dot: '#95A4FC' },
      'Complete': { text: '#4AA785', dot: '#A1E3CB' },
      'Pending': { text: '#59A8D4', dot: '#B1E3FF' },
      'Approved': { text: '#FFC555', dot: '#FFE999' },
      'Rejected': { text: '#1C1C1C66', dot: '#1C1C1C66' },
    };
    return statusColors[status] || { text: '#000', dot: '#000' };
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center px-6 py-2 bg-[#F7F9FB] rounded-lg mb-4">
        <div className="space-x-4">
          <button className="focus:outline-none text-black hover:text-gray-600">
            <AiOutlinePlus size={20} />
          </button>
          <button className="focus:outline-none text-black hover:text-gray-600">
            <IoFilterOutline size={20} />
          </button>
          <button className="focus:outline-none text-black hover:text-gray-600">
            <TbArrowsDownUp size={20} />
          </button>
        </div>
        <div>
          <Input
            prefix={<FiSearch size={16} />}
            placeholder="Search"
            className="text-[#1C1C1C33] placeholder-gray-400 bg-[#F7F9FB] border-[1.5px] border-[#1C1C1C1A] rounded-lg"
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        bordered={false}
        rowClassName="relative"
        onRow={(record) => ({
          onMouseEnter: () => setHoveredRow(record.key),
          onMouseLeave: () => setHoveredRow(null)
        })}
      />
      {/* <div className="flex justify-end items-center space-x-2 mt-2">
        <Button icon={<LeftOutlined />} />
        <span>1</span>
        <Button icon={<RightOutlined />} />
      </div> */}
    </div>
  );
};

export default OrdersListPage;
