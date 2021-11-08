import React, { useState } from 'react'
import { ActiveTicket } from '../ActiveTicket';
import { DeleteTicket } from '../DeleteTicket';
import { UsedTicket } from '../UsedTicket';

/**
* @author
* @function MyTicket
**/

export const MyTicket = (props) => {


    const [currentTab, setCurrentTab] = useState(1);
    return (
        <React.Fragment>
            <div className="ticket-tab">
                <div className={currentTab === 1 ? "tab active" : "tab "} onClick={() => setCurrentTab(1)}>Chuyến sắp đi</div>
                <div className={currentTab === 2 ? "tab active" : "tab "} onClick={() => setCurrentTab(2)}>Chuyến đã đi</div>
                <div className={currentTab === 3 ? "tab active" : "tab "} onClick={() => setCurrentTab(3)}>Chuyến đã hủy</div>
            </div>
            <div className={"ticket-tab__indicator " + (currentTab === 1 ?
                "indi1" : (currentTab === 2 ? "indi2" : "indi3"))}>

            </div>

            <div className="ticket-tab__line"></div>

            <div className="ticket-tab__main">
                <div className={currentTab === 1 ? "tab active" : "tab"}>
                    <ActiveTicket />
                </div>

                <div className={currentTab === 2 ? "tab active" : "tab"}>
                    <UsedTicket />
                </div>

                <div className={currentTab === 3 ? "tab active" : "tab"}>
                    <DeleteTicket />
                </div>
            </div>
        </React.Fragment>
    )

}