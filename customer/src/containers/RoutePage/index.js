import React from 'react'
import { FuncBar } from '../../components/FuncBar'
import { LayoutCustomer } from '../../components/Layout/index'
import { FilterTicket } from '../../components/Ticket/Filter'
import { TicketFounded } from '../../components/Ticket/TicketFounded'

// css
import '../../asset/css/main-ticket.css'
import '../../asset/css/base.css'
import { Footer } from '../../components/Footer'

/**
* @author
* @function RoutePage
**/

export const RoutePage = (props) => {
  return (
    <div>
      <LayoutCustomer></LayoutCustomer>
      <FuncBar></FuncBar>
      <div className="wrapper-ticket-main">
        <div className="ticket-main">
          <div className="ticket__filter">
            <FilterTicket> </FilterTicket>
          </div>
          <div className="ticket__founded">
            <TicketFounded></TicketFounded>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )

}