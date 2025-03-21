import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className=" bg-[#043249] text-white  py-4 px-6 ">
        <div className="flex lg:flex-row flex-row  justify-between items-center ">
          <div>
            <h1 className=" lg:text-4xl font-medium ">Hello, Abid</h1>
            <p className=" text-lg ">
              You can see the total overview of your app from here
            </p>
          </div>
          <div>
            <div className="w-[56px] h-[56px] bg-white rounded-full ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill="white" />
                <path
                  d="M42.9997 38.3342L42.6666 38.0402C41.7217 37.1979 40.8944 36.2322 40.2071 35.1692C39.456 33.7022 39.0062 32.0997 38.8843 30.4561V25.6156C38.8908 23.0342 37.9544 20.5393 36.2511 18.5997C34.5479 16.6601 32.1949 15.4092 29.6344 15.082V13.818C29.6344 13.4711 29.4966 13.1383 29.2512 12.893C29.0059 12.6477 28.6732 12.5099 28.3263 12.5099C27.9793 12.5099 27.6466 12.6477 27.4013 12.893C27.156 13.1383 27.0182 13.4711 27.0182 13.818V15.1016C24.4806 15.4523 22.156 16.7108 20.4751 18.6439C18.7942 20.5771 17.8709 23.0538 17.876 25.6156V30.4561C17.7541 32.0997 17.3043 33.7022 16.5532 35.1692C15.878 36.2298 15.064 37.1953 14.133 38.0402L13.7998 38.3342V41.0974H42.9997V38.3342Z"
                  fill="#043249"
                />
                <path
                  d="M25.8228 42.1263C25.9087 42.7474 26.2165 43.3164 26.6892 43.7283C27.162 44.1402 27.7679 44.3671 28.3949 44.3671C29.0219 44.3671 29.6278 44.1402 30.1006 43.7283C30.5733 43.3164 30.8811 42.7474 30.967 42.1263H25.8228Z"
                  fill="#043249"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
