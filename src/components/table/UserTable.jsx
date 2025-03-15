import React from "react";
import { Table, Avatar } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    srNo: "1.",
    name: "Md. Abid Hasan",
    email: "example@domain.com",
    id: "#21565",
    avatar: "https://via.placeholder.com/40",
  },
  {
    key: "2",
    srNo: "2.",
    name: "Md. Abid Hasan",
    email: "example@domain.com",
    id: "#21565",
    avatar: "https://via.placeholder.com/40",
  },
  {
    key: "3",
    srNo: "3.",
    name: "Md. Abid Hasan",
    email: "example@domain.com",
    id: "#21565",
    avatar: "https://via.placeholder.com/40",
  },
];

const columns = [
  {
    title: <span className="font-bold">Sr. no.</span>,
    dataIndex: "srNo",
    key: "srNo",
  },
  {
    title: <span className="font-bold">Name</span>,
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center space-x-2">
        <Avatar src={record.avatar} size={40} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: <span className="font-bold">Email</span>,
    dataIndex: "email",
    key: "email",
  },
  {
    title: <span className="font-bold">ID</span>,
    dataIndex: "id",
    key: "id",
  },
  {
    title: <span className="font-bold">Action</span>,
    key: "action",
    render: () => (
      <div className="flex space-x-4">
        <EyeOutlined className="text-lg text-blue-900 cursor-pointer" />
        <DeleteOutlined className="text-lg text-red-500 cursor-pointer" />
      </div>
    ),
  },
];

const UserTable = () => {
  return (
    <div className="p-4">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="custom-table"
      />
    </div>
  );
};

export default UserTable;
