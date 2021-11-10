import React from 'react'
import { ItemTicket } from '../ItemTicket'

/**
* @author
* @function ActiveTicket
**/

export const ActiveTicket = (props) => {
  //console.log(props);
  return(
    <React.Fragment>
        <div className="ticket-list">

             {props.info.map(item => (<ItemTicket info={item} display={true}/>))}
            
        </div>
        
    </React.Fragment>
   )

 }