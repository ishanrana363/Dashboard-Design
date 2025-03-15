import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 20000 },
  { month: "Mar", value: 10000 },
  { month: "Apr", value: 48000 },
  { month: "May", value: 25000 },
  { month: "Jun", value: 15000 },
  { month: "Jul", value: 35000 },
  { month: "Aug", value: 20000 },
  { month: "Sep", value: 33000 },
  { month: "Oct", value: 50000 },
  { month: "Nov", value: 50000 },
  { month: "Dec", value: 12000 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="blue" stopOpacity={0.3} />
            <stop offset="95%" stopColor="blue" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis  />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey="value"
          stroke="blue"
          fillOpacity={1}
          fill="url(#colorUv)"
          strokeWidth={2}
          dot={{ r: 4, fill: "white", stroke: "blue", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
