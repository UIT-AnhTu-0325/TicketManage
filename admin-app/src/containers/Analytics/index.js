import React from "react";
import { Layout } from "../../components/Layout";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import LChart from "../../components/chart/Chart";
import { Dropdown, Button } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentMonth, getDateByMonthYear, getNewUser, getTicketCanceled } from "../../actions/analyticsActions";
import "../../asset/css/containers-css/Analytics.css"
import Chart from "react-apexcharts"
import { useHistory } from 'react-router'
import { Doughnut } from 'react-chartjs-2'


/**
 * @author
 * @function Analytics
 **/

export const Analytics = (props) => {

    var today = new Date()

    const [month, setMonth] = useState(today.getMonth() + 1)
    const [year, setYear] = useState(today.getFullYear())

    var monthIndex = month - 1;

    var date = new Date(year, monthIndex, 1);

    var names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var days = [];
    while (date.getMonth() === monthIndex) {
        days.push(date.getDate() + ' ' + names[date.getDay()]);
        //days.push(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear());
        date.setDate(date.getDate() + 1);
    }

    console.log(days)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentMonth({ month, year }))
        dispatch(getDateByMonthYear({ month, year }))
        dispatch(getNewUser({ month, year }))
        dispatch(getTicketCanceled({ month, year }))
    }, []);

    const filterShow = (e) => {
        e.preventDefault();
        dispatch(getDateByMonthYear({ month, year }))
        dispatch(getCurrentMonth({ month, year }))
        dispatch(getNewUser({ month, year }))
        dispatch(getTicketCanceled({ month, year }))
    };

    const analytics = useSelector((state) => state.analytics)
    const { totalTicket, totalSale } = analytics

    const chart = useSelector((state) => state.chart)
    const { listTicket, listSale } = chart

    const newUser = useSelector((state) => state.newUser)
    const { listNewUser } = newUser

    const ticket = useSelector((state) => state.ticket)
    const { donutData } = ticket

    const chartOptions = {
        series: [
            {
                type: "column",
                name: "Ticket",
                data: listTicket,
            },
            {
                type: "line",
                name: "Sale",
                data: listSale,
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
                categories: days,
            },
            legent: {
                position: "left",
            },
            grid: {
                show: true,
            },
            yaxis: [
                {
                    title: {
                        text: "Ticket"
                    },
                },
                {
                    opposite: true,
                    title: {
                        text: "Sale"
                    }
                }
            ],
            title: {
                text: 'Analysis of Ticket and Sale',
                align: 'left'
            },
        },
    };

    const chartOptions1 = {
        series: [
            {
                type: "line",
                name: "New User",
                data: listNewUser,
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
                categories: days,
            },
            legent: {
                position: "left",
            },
            grid: {
                show: true,
            },
            title: {
                text: 'Analysis of New User',
                align: 'left'
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
            }
        },
    };


    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <Layout sidebar>
            <div>
                <FeaturedInfo ticket={totalTicket} sale={totalSale} />
                <div className="dropDown">
                    <select value={month} classname="custom-select" onChange={(e) => { setMonth(parseInt(e.target.value)) }}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select value={year} classname="custom-select" onChange={(e) => { setYear(parseInt(e.target.value)) }}>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                    <Button variant="dark" onClick={filterShow} className="btnItem">Filter</Button>
                </div>

                <div className="chart">
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                    />
                </div>
                {/* <div className="chart">
                    <Chart
                        type="donut"
                        width={600}
                        height={600}
                        series={donutData}
                        options={{
                            labels: ['Ticket Sold', 'Ticket Canceled'],
                            title: { text: 'Ticket' },
                            plotOptions: {
                                pie: {
                                    donut: {
                                        labels: {
                                            show: true
                                        }
                                    }
                                }
                            }
                        }}
                    >
                    </Chart>
                </div> */}
                <div className="chart">
                    <Doughnut
                        data={{
                            labels: ['Ticket Sold', 'Ticket Canceled'],
                            datasets: [{
                                data: donutData,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)'
                                ],
                            }]
                        }}
                    >
                    </Doughnut>
                </div>
                <div className="chart">
                    <Chart
                        options={chartOptions1.options}
                        series={chartOptions1.series}
                    />
                </div>

                {/* <LChart data={listTicket} title="Tickets" grid dataKey1="totalTicket" />
                <LChart data={listTicket} title="Sales" grid dataKey2="totalSale" />
                <LChart data={listOfNewUser} title="New User" grid dataKey3="newUser" />
                <Chart
                    type="donut"
                    width={600}
                    height={600}
                    series={[ticketCurrentMonth, ticketCanceled]}
                    options={{
                        labels: ['Ticket Sold', 'Ticket Canceled'],
                        title: { text: 'Ticket' },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true
                                    }
                                }
                            }
                        }
                    }}
                >

                </Chart> */}
            </div>
        </Layout>
    )
};
