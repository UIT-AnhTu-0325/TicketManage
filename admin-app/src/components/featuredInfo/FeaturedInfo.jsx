
import "../featuredInfo/featuredInfo.css"

export default function FeaturedInfo({ ticket, sale, canceledTicket, newUser }) {



    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Tickets Sold</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney" id="ticketId">{ticket}  </span>
                    <span className="featuredMoneyRate">
                        {/* -200 <ArrowDownward className="featuredIcon negative" /> */}
                        {/* <i class="fas fa-chevron-left"></i> */}
                    </span>
                </div>
                {/* {<span className="featuredSub">Compared to last month</span>} */}
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Canceled Ticket</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney" id="saleId">{canceledTicket} </span>
                    <span className="featuredMoneyRate">
                        {/* +11,4 <ArrowUpward className="featuredIcon" /> */}
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </span>
                </div>
                {/*<span className="featuredSub">Compared to last month</span>*/}
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney money" id="saleId">
                        
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sale)} </span>
                    <span className="featuredMoneyRate">
                        {/* +11,4 <ArrowUpward className="featuredIcon" /> */}
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </span>
                </div>
                {/*<span className="featuredSub">Compared to last month</span>*/}
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">New User</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney" id="saleId">{newUser} </span>
                    <span className="featuredMoneyRate">
                        {/* +11,4 <ArrowUpward className="featuredIcon" /> */}
                        {/* <i class="fas fa-chevron-right"></i> */}
                    </span>
                </div>
                {/*<span className="featuredSub">Compared to last month</span>*/}
            </div>
        </div>
    )
}