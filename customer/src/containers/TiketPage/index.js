import React, {useEffect, useState} from 'react'
import { FuncBar } from '../../components/FuncBar'
import {LayoutCustomer} from '../../components/Layout/index'
import { FilterTicket } from '../../components/Ticket/Filter'
import { TicketFounded } from '../../components/Ticket/TicketFounded'
import { useDispatch } from 'react-redux'
import { getAll } from '../../action/route';
import { fetch } from '../../action/trip'
// css
import '../../asset/css/main-ticket.css'
import '../../asset/css/base.css'

/**
* @author
* @function TicketPage
**/

export const TicketPage = (props) => {
  const queryString = require('query-string');
  var parse = queryString.parse(props.location.search);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    time:{
      night: false,
      morning: false,
      afternoon: false,
      evening: false
    },
    enterprise:[],
    price:[]
  });

  const reload = (data) => {
    setFilter(data);
  }
    useEffect(() => {
        dispatch(getAll());
        dispatch(fetch());
    });

  return(
    <div>
         <LayoutCustomer></LayoutCustomer>
         <FuncBar start={parse.startLocation} end={parse.endLocation}></FuncBar>
         <div className="wrapper-ticket-main">
          <div className="ticket-main">
            <div className="ticket__filter">
                <FilterTicket filter={filter} setFilter={reload}> </FilterTicket>
            </div>
            <div className="ticket__founded">
              <TicketFounded start={parse.startLocation} end={parse.endLocation} filter={filter}></TicketFounded>
            </div>
          </div>
         </div>
    </div>
   )

 }