import React from 'react'
import { Layout } from '../components/Layout'
import statusCards from '../asset/JsonData/status-card-data.json'
import { StatusCard } from '../components/statusCard/StatusCard'

import Chart from 'react-apexcharts'
import { Table } from '../components/table/Table'
/**
* @author
* @function DashBoard
**/

export const DashBoard = (props) => {

  const chartOptions = {
    series: [
        {
          name : 'Xe Khach',
          data: [30, 50,90,52,18,50,85,99,89]
        },
        {
          name : 'Xe Thue',
          data: [10, 70,40,62,28,50,55,79,59]
        }
    ],
    options:{
      color : ['#6ab04c', '#2980b9'],
      chart: {
        background: 'transparent'
      },
      dataLabels: {
        enable: false
      },
      stroke : {
        curve: "smooth"
      },
      xaxis:{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legent: {
        position: 'left'
      },
      grid: {
        show: false
      }
    }
    
  }


  const topEnterPrises = {
    head: [
        'Enterprise',
        'total booking',
        'total spending'
    ],
    body: [
        {
            "username": "Phương Trang",
            "order": "3.490",
            "price": "$15,870"
        },
        {
            "username": "Cát Linh",
            "order": "3.220",
            "price": "$12,251"
        },
        {
            "username": "Hà Đông",
            "order": "1.520",
            "price": "$10,840"
        },
        {
            "username": "Hà Nội",
            "order": "910",
            "price": "$9,251"
        },
        {
            "username": "Sài Gòn",
            "order": "555",
            "price": "$8,840"
        }
    ]
}

const latestOrders = {
  header: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "Còn Cái Nịt",
          date: "17 Jun 2021",
          price: "$900",
          status: "paid"
      },
      {
          id: "#OD1712",
          user: "Óc Lợn",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "Chấm",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "Lmaolmao",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "Jett Diff",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}



const renderHead = (item, ind) =>(
  <th key={ind}>{item}</th>
) 

const renderBody = (item, ind)=>(
  <tr key={ind}> 
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const renderOrderHead= (item, ind) =>(
   <th key = {ind}>{item}</th>
)
const renderOrderBody= (item, ind) =>(
  <tr key= {ind}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td>{item.status}</td>
  </tr>
)
  return(
    <div>
       <Layout sidebar >
          <h2 className="page-header">
            Dashboard
          </h2>

          <div className="row">
            <div className="col-6">
                <div className="row">
                    {
                        statusCards.map((item, ind) =>(
                            <div className="col-6">
                                
                                <StatusCard 
                                  icon={item.icon}
                                  quantity={item.count}
                                  title={item.title}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="col-6">
              <div className="card full-height">
                    <Chart 
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='line'
                    height='100%'
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
                      headData = {topEnterPrises.head}
                      renderHead= {(item, ind) => renderHead(item, ind)}
                      bodyData= {topEnterPrises.body}
                      renderBody= {(item, ind) => renderBody (item, ind)}
                    />
                </div>
                <div className="card__footer">
                  <a>View all</a>
                </div>
              </div>
            </div>


            <div className="col-7">
              <div className="card">
                <div className="card__header">
                  <h3>Latest Order</h3>
                </div>
                <div className="card__body">
                    <Table 
                      headData = {latestOrders.header}
                      renderHead= {(item, ind) => renderOrderHead(item, ind)}
                      bodyData= {latestOrders.body}
                      renderBody= {(item, ind) => renderOrderBody (item, ind)}
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
   )

 }