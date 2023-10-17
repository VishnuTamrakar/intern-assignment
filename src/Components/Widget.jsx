import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "earning":
      data = {
        title: "Earning",
        money: "$198k",
        per: "37.8%",
        highSale: "sale",
        icons: (
          <AiOutlineDollarCircle className=" text-green-500  p-5 w-24  h-24 " />
        ),
        bgColor: "bg-green-100",
      };
      break;
    case "order":
      data = {
        title: "Orders",
        money: "$2.4k",
        per: "2%",
        icons: <BsFileText className=" text-purple-500  p-6  w-24  h-24 " />,
        bgColor: "bg-purple-100",
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        money: "$2.4k",
        per: "2%",
        icons: (
          <MdOutlineAccountBalanceWallet className=" text-blue-500  p-5 w-24  h-24 " />
        ),
        bgColor: "bg-cyan-100",
      };
      break;
    case "total sales":
      data = {
        title: "Total Sales",
        money: "$89k",
        per: "11%",
        highSale: "sale",
        icons: <BiShoppingBag className=" text-red-500  p-5 w-24  h-24 " />,
        bgColor: "bg-pink-100",
      };
      break;
    default:
      break;
  }
  return (
    <div className=" flex-1 flex  items-center  p-4  rounded-sm shadow-sm  bg-white ">
      <div className={`left rounded-full  ${data.bgColor} `}>{data.icons}</div>
      <div className="right flex flex-col items-start p-2">
        <span className=" text-xs text-gray-500  ">{data.title}</span>
        <h1 className=" text-2xl">{data.money}</h1>
        <span className="flex items-center text-xs w-full">
          {data.highSale ? (
            <i class="fa-solid fa-arrow-up" style={{ color: "green" }}></i>
          ) : (
            <i class="fa-solid fa-arrow-down" style={{ color: "red" }}></i>
          )}
          <span
            className={`${
              data.highSale ? "text-green-900 " : "text-red-600"
            }  text-xs`}
          >
            {data.per}
          </span>{" "}
          <span className=" ml-1">this month</span>
        </span>
      </div>
    </div>
  );
};

export default Widget;
