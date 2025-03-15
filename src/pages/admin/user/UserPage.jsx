import React from "react";
import { Button, Input } from "antd";
import UserTable from "../../../components/table/UserTable";

const UserPage = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6 lg:flex-row  justify-between items-center   " >
        <div className="mt-20 md:mt-0 w-full md:w-1/2">
          <Input
            className="ant-input placeholder:text-[20px] placeholder:text-gray-900 w-full"
            size="large"
            style={{
              border: "1px solid black",
              height: "60px",
              borderRadius: "30px",
            }}
            placeholder="Search users by their name or ID"
            suffix={
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2222 21.4445C16.8678 21.4445 21.4445 16.8678 21.4445 11.2223C21.4445 5.57666 16.8678 1 11.2222 1C5.57666 1 1 5.57666 1 11.2223C1 16.8678 5.57666 21.4445 11.2222 21.4445Z"
                  stroke="#043249"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.0003 24L18.5059 18.5055"
                  stroke="#043249"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div>
          <Button
            style={{ fontWeight: "500", width: "100px", border: "1px solid black", padding:"20px 0" }}
          >
            Sort by
          </Button>
        </div>
      </div>
      <div>
        <UserTable></UserTable>
      </div>
    </div>
  );
};

export default UserPage;
