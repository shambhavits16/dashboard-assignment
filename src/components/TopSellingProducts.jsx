/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "font-normal",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: price => `$${price.toFixed(2)}`, // Format price with two decimal places
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: amount => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, // Format amount with commas and two decimal places
  },
];

const TopSellingProducts = ({ products }) => (
  <div
    title="Top Selling Products"
    className="max-w-screen-lg mx-auto bg-[#F7F9FB] rounded-lg p-6"
  >
    <Table
      dataSource={products}
      columns={columns}
      pagination={false}
      bordered={false}
      className="min-w-full"
      rowClassName="bg-[#F7F9FB]"
    />
  </div>
);

export default TopSellingProducts;
