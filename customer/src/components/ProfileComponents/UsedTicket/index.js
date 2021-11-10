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
        {props.info.map(item => (<ItemTicket info={item} display={false}/>))}
            
        </div>
        
    </React.Fragment>
   )

 }