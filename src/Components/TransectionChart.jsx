import React  from "react";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis
} from "recharts";
const TransectionCart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fab",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 5090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 4490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className=' h-[22rem] flex bg-white p-4 rounded-sm flex-col shadow-sm flex-1 '>
      <div className=' flex p-4 justify-between items-center '>
        <div className=" flex flex-col">
        <h1 className=" text-xl" >Overview</h1>
        <span className=" text-sm text-gray-400">Monthly Earning</span>
        </div>
        <div className='flex p-4 rounded-md  items-center gap-0 justify-between'>
            <span className=" text-md text-gray-500">Quarterly</span>
            <i class="fa-solid fa-angle-down fa-lg p-3 mt-1 " style={{color:'gray'}}></i>
        </div>
      </div>
      <div className=" w-full mt-3 flex-1 text-xs ">
        <ResponsiveContainer  width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
           <Bar dataKey="uv" >
           {data.map((value, index)=> (
             <Cell key={`cell-${index}`} cursor="pointer" className=" " fill='blue' radius={20} />
             
             ))}
           </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransectionCart;
