import React from 'react'
import { ItemTicket } from '../ItemTicket'
/**
* @author
* @function DeleteTicket
**/

export const DeleteTicket = (props) => {
    return (
        <React.Fragment>
            <div className="ticket-list">
                <ItemTicket />
                <ItemTicket />
            </div>

        </React.Fragment>
    )

}