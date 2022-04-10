import "../chart/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React from "react";
import PropTypes from "prop-types";

const LChart = (props) => {
  const { title, data, dataKey1, dataKey2, dataKey3, grid } = props;
  return (
    <div className="chart">
      <h3>
        <div className="chartTitle">{title}</div>
      </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="_id" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey1} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
          <Line type="monotone" dataKey={dataKey3} stroke="#e21f74" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.any,
  dataKey1: PropTypes.any,
  dataKey2: PropTypes.any,
  dataKey3: PropTypes.any,
  grid: PropTypes.any,
};

export default LChart;
