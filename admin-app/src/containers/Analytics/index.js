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

    var today = new Date()

    const [month, setMonth] = useState(today.getMonth() + 1)
    const [year, setYear] = useState(today.getFullYear())

    const [ticketCurrentMonth, setTicketCurrentMonth] = useState("")
    const [saleCurrentMonth, setSaleCurrentMonth] = useState("")

    const analytics = useSelector((state) => state.analytics)
    const { listOfAnalytics } = analytics

    const chart = useSelector((state) => state.chart)
    const { listOfAnalyticsChart } = chart

    // var lastMonth = today.getMonth()
    // var month = today.getMonth() + 1
    // var year = today.getFullYear()


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentMonth({ month, year }))
        dispatch(getDateByMonthYear({ month, year }))
        //setTicketCurrentMonth(listOfAnalytics.map(a => a.totalTicket))
        //setSaleCurrentMonth(listOfAnalytics.map(a => a.totalSale))
    }, []);

    const filterShow = (e) => {
        e.preventDefault();
        dispatch(getDateByMonthYear({ month, year }))
        dispatch(getCurrentMonth({ month, year }))
        setTicketCurrentMonth(listOfAnalytics.map(a => a.totalTicket))
        setSaleCurrentMonth(listOfAnalytics.map(a => a.totalSale))
    };

    return (
        <Layout sidebar>
            <div>
                <FeaturedInfo ticket={ticketCurrentMonth} sale={saleCurrentMonth} />
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
                <Chart data={listOfAnalyticsChart} title="Tickets" grid dataKey1="totalTicket" />
                <Chart data={listOfAnalyticsChart} title="Sales" grid dataKey2="totalSale" />
            </div>
        </Layout>
    )
};
