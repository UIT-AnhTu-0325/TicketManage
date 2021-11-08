import React from 'react'
import { ItemTicket } from '../ItemTicket'
/**
* @author
* @function UsedTicket
**/

export const UsedTicket = (props) => {
  return(
    <React.Fragment>
        <div className="ticket-list">
             <ItemTicket />
             <ItemTicket />
             <ItemTicket />
            
        </div>
        
    </React.Fragment>
   )

 }