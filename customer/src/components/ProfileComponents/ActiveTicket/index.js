import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ItemTicket } from '../ItemTicket'

/**
* @author
* @function ActiveTicket
**/

export const ActiveTicket = (props) => {
  const [rules,setRules] = useState({
    book: 1,
    cancel: 1,
    max: 1
  });
  useEffect(() => {
    axios.get(`http://localhost:2000/api/rule`)
            .then(function (response) { return response.data })
            .then(function (data) {
                const items = data;
                setRules({
                    book: items[0].book,
                    cancel: items[0].cancel,
                    max: items[0].max
                });
            });
  }, []);
  //console.log(props);
  return(
    <React.Fragment>
        <div className="ticket-list">

             {props.info.map(item => (<ItemTicket info={item} display={new Date(new Date(item.trip.startDate) - 24*3600*1000*rules.cancel) >= Date.now() ? true : false} details={true}/>))}
            
        </div>
        
    </React.Fragment>
   )

 }