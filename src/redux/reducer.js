import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/Promotions'
import { LEADERS } from '../shared/Leaders'
import { COMMENTS } from '../shared/Comments'

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};