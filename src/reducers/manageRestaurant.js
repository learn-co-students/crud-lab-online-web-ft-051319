
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants:[]
}, action) {
  switch(action.type){
    case "ADD_RESTAURANT":
      const restaurant={
        id: cuid(),
        text: action.text,
        reviews: []
      }
      return {...state,restaurants: [...state.restaurants,restaurant]}

      case "DELETE_RESTAURANT":
        return {...state,restaurants: state.restaurants.filter(res=>res.id!==action.id)}

      case "ADD_REVIEW":
        const index=state.restaurants.findIndex(restaurant=> restaurant.id===action.restaurantId)
        const review={
          text: action.text,
          id: cuid(),
          restaurantId: action.restaurantId
        }
        state.restaurants[index].reviews.push(review)
        return state

      default:
        return state
  }
}
