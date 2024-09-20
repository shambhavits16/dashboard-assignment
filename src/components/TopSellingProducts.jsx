/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => `$${price}`,
  },
  { title: "Quantity", dataIndex: "quantity", key: "quantity" },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => `$${amount.toFixed(2)}`,
  },
];

const TopSellingProducts = ({ products }) => (
  <div
    title="Top Selling Products"
    className="w-full max-w-2xl bg-blue-50 rounded-3xl bg-opacity-60"
  >
    <Table dataSource={products} columns={columns} pagination={false} />
  </div>
);

export default TopSellingProducts;
