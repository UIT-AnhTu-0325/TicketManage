import { BOOK_SUCCESS, BOOK_FAILURE} from "../constant/actionType";

export default (books = [], action) => {
    switch (action.type) {
        case BOOK_SUCCESS: 
            return [...books,action.payload];
        case BOOK_FAILURE:
            return action.payload;
        default:
            return books;
    }
};