import React from "react";
import { Layout } from "../../components/Layout";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

/**
 * @author
 * @function Analytics
 **/

export const Analytics = (props) => {
    return (
        <Layout sidebar>
            <div>
                <FeaturedInfo />
                <Chart data={userData} title="Analytics" grid dataKey1="Tickets Sold" dataKey2="Sales" />
            </div>
        </Layout>
    )
};
