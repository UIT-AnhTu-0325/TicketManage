import React from 'react'
import { ItemTicket } from '../ItemTicket'

/**
* @author
* @function ActiveTicket
**/

export const ActiveTicket = (props) => {
  return(
    <React.Fragment>
        <div className="ticket-list">

             <ItemTicket />
            
        </div>
        
    </React.Fragment>
   )

 }