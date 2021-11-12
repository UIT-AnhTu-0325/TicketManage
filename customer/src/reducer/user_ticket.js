import { BOOK_SUCCESS, BOOK_FAILURE, BOOK_GET_ALL} from "../constant/actionType";

export default (userTicket = [], action) => {
    switch (action.type) {
        case BOOK_SUCCESS: 
            return [...userTicket,action.payload];
        case BOOK_GET_ALL:
            return action.payload;
        case BOOK_FAILURE:
            return action.payload;
        default:
            return userTicket;
    }
};