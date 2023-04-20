import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";

export default function Chart({ data }) {
  return (
    <>
      <BarChart width={600} height={300} data={data} noSsr={true}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export async function getStaticProps() {
  const data = [
    { name: "January", value: 100 },
    { name: "February", value: 600 },
    { name: "March", value: 100 },
    { name: "April", value: 400 },
    { name: "May", value: 500 },
    { name: "June", value: 200 },
  ];

  return {
    props: { data },
  };
}
