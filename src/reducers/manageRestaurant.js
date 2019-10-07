
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            action.restaurant.id = cuidFn()
            return {...state, restaurants: [...state.restaurants, action.restaurant]}
        default:
            return state 
    }
};
