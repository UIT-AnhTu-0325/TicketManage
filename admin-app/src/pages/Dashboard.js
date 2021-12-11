import React from "react";
import { Layout } from "../components/Layout";
import statusCards from "../asset/JsonData/status-card-data.json";
import { StatusCard } from "../components/statusCard/StatusCard";
import {
  getAllName,
  getCurrentByEnterprises,
  getCurrentByEnterprisesList,
  getCurrentDate,
  getLastOrder,
} from "../actions/analyticsActions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Chart from "react-apexcharts";
import { Table } from "../components/table/Table";
import { Redirect } from "react-router-dom";
/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentDate());
    dispatch(getCurrentByEnterprises());
    dispatch(getCurrentByEnterprisesList());
    dispatch(getAllName());
    dispatch(getLastOrder());
  }, []);

  const currentDate = useSelector((state) => state.currentDate);
  const chartByEnterprise = useSelector((state) => state.chartByEnterprise);
  const listByEnterprise = useSelector((state) => state.listByEnterprise);
  const listNameEnterprise = useSelector((state) => state.listNameEnterprise);
  const listLastOrder = useSelector((state) => state.listLastOrder);
  const auth = useSelector((state) => state.auth);

  console.log(listNameEnterprise.listName);

  const chartOptions = {
    series: [
      {
        type: "line",
        name: "Sales",
        data: chartByEnterprise.sale,
      },
      {
        type: "column",
        name: "Booking",
        data: chartByEnterprise.booking,
      },
    ],
    options: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enable: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: listNameEnterprise.listName,
      },
      legent: {
        position: "left",
      },
      grid: {
        show: false,
      },
      yaxis: [
        {
          title: {
            text: "Sales",
          },
        },
        {
          opposite: true,
          title: {
            text: "Booking",
          },
        },
      ],
      title: {
        text: "Booking and Sales of Enterprises",
        align: "left",
      },
    },
  };

  const topEnterPrises = {
    head: ["Enterprise", "total booking", "total spending"],
    body: listByEnterprise.listEnterprises,
  };

  const latestOrders = {
    header: ["STT", "user", "email", "contact number", "price", "status"],
    body: listLastOrder.listOrder,
  };

  const renderHead = (item, ind) => <th key={ind}>{item}</th>;

  const renderBody = (item, ind) => (
    <tr key={ind}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  );

  const renderOrderHead = (item, ind) => <th key={ind}>{item}</th>;
  const renderOrderBody = (item, ind) => (
    <tr key={ind}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.email}</td>
      <td>{item.contact}</td>
      <td>{item.price}</td>
      <td>{item.status}</td>
    </tr>
  );

  if (Object.keys(currentDate).length === 0) {
    return null;
  }
  if (currentDate.currentDateData === null) {
    return null;
  }

  if (!localStorage.getItem("token")) {
    return <Redirect to={`/signin`}></Redirect>;
  }

  return (
    <div>
      <Layout sidebar dashboard="true">
        <h2 className="page-header">Dashboard</h2>

        <div className="row">
          <div className="col-12">
            <div className="row">
              {currentDate.currentDateData.map((item) => (
                <div className="col-3">
                  <StatusCard
                    icon={item.icon}
                    quantity={item.count}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-7">
            <div className="card full-height">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                height="100%"
              />
            </div>
          </div>

          <div className="col-5">
            <div className="card">
              <div className="card__header">
                <h3>Top Enterprise</h3>
              </div>
              <div className="card__body">
                <Table
                  headData={topEnterPrises.head}
                  renderHead={(item, ind) => renderHead(item, ind)}
                  bodyData={topEnterPrises.body}
                  renderBody={(item, ind) => renderBody(item, ind)}
                />
              </div>
              <div className="card__footer">
                <a>View all</a>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="card">
              <div className="card__header">
                <h3>Latest Order</h3>
              </div>
              <div className="card__body">
                <Table
                  headData={latestOrders.header}
                  renderHead={(item, ind) => renderOrderHead(item, ind)}
                  bodyData={latestOrders.body}
                  renderBody={(item, ind) => renderOrderBody(item, ind)}
                />
              </div>
              <div className="card__footer">
                <a>View all</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
