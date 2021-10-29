import React from 'react'
import { TicketDetail } from '../TicketDetail'
import { useSelector } from 'react-redux';
/**
* @author
* @function TicketFounded
**/

export const TicketFounded = ({ start, end, filter }) => {
    const trips = useSelector(state => state.trips);
    let result = [];
    trips.filter(element =>
        (start == "Mọi nơi" ? true : element.route.startLocation == start)
        && (end == "Mọi nơi" ? true : element.route.endLocation == end))
        .map(element => {
            if (filter.enterprise.indexOf(element.enterprise.name) !== -1 || filter.enterprise.length == 0) {
                if (element.ticket.price >= filter.price[0] && element.ticket.price <= filter.price[1])
                    if (filter.time.morning == filter.time.afternoon && filter.time.afternoon == filter.time.evening && filter.time.evening == filter.time.night) {
                        result.push(element);
                    } else if (filter.time.night == true && element.route.startTime >= 0 && element.route.startTime <= 6
                        || filter.time.morning == true && element.route.startTime > 6 && element.route.startTime <= 12
                        || filter.time.afternoon == true && element.route.startTime > 12 && element.route.startTime <= 18
                        || filter.time.evening == true && element.route.startTime > 18 && element.route.startTime < 24){     
                            result.push(element);
                    }
            }
        });
    return (
        <>
            <div className="ticket__header">
                <div className="ticket__header__title">
                    Các chuyến xe đi từ <span>{start}</span>  đến  <span>{end}</span>
                </div>

                <div className="ticket__header__option">
                    <div className="option__item">
                        Mọi nơi
                    </div>
                    <div className="option__item active">
                        Dành cho bạn
                    </div>
                    <div className="option__item">
                        Theo dõi
                    </div>
                </div>
            </div>

            <div className="ticket__result">
                {result.length === 0 ? (<h2>Không có chuyến xe phù hợp</h2>) : result.map(element => (<TicketDetail info={element} />))}
            </div>


        </>
    )

}