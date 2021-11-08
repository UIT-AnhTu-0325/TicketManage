import React from "react";
import { Layout } from "../../components/Layout";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import { Dropdown, Button } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentMonth, getDateByMonthYear } from "../../actions/analyticsActions";
import "../../asset/css/containers-css/Analytics.css"

/**
 * @author
 * @function Analytics
 **/

export const Analytics = (props) => {

    const [ticketCurrentMonth, setTicketCurrentMonth] = useState("")
    const [saleCurrentMonth, setSaleCurrentMonth] = useState("")

    const analytics = useSelector((state) => state.analytics)
    const { listOfAnalytics } = analytics

    const chart = useSelector((state) => state.chart)
    const { listOfAnalyticsChart } = chart

    var today = new Date()
    var lastMonth = today.getMonth()
    var month = today.getMonth() + 1
    var year = today.getFullYear()


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentMonth({ month, year }));
        console.log(listOfAnalytics.map(a => a.totalTicket))
        setTicketCurrentMonth(listOfAnalytics.map(a => a.totalTicket))
        setSaleCurrentMonth(listOfAnalytics.map(a => a.totalSale))
    }, []);

    const filterShow = (e) => {
        e.preventDefault();
        dispatch(getDateByMonthYear({ month, year }))
        console.log(listOfAnalyticsChart)

    };

    return (
        <Layout sidebar>
            <div>
                <FeaturedInfo ticket={ticketCurrentMonth} sale={saleCurrentMonth} />
                <div className="dropDown">
                    <Dropdown className="dropDownItem">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            Month
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-2">All</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">January</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">February</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">May</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">June</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">July</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">August</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">October</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">November</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">December</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropDownItem">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            Year
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-2">2020</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" onClick={filterShow} className="btnItem">Filter</Button>
                </div>
                <Chart data={listOfAnalyticsChart} title="Analytics" grid dataKey1="totalTicket" dataKey2="totalSale" />
            </div>
        </Layout>
    )
};
