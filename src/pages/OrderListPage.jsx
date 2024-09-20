// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Table } from 'antd';

const OrdersListPage = () => {
  const columns = [
    { title: 'Order ID', dataIndex: 'orderID', key: 'orderID' },
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Project', dataIndex: 'project', key: 'project' },
    // Add more columns as per your requirements
  ];

  const data = []; // Data to be fetched from an API or similar

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
  );
};

export default OrdersListPage;