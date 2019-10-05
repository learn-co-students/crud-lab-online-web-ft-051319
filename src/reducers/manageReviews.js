import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = [], action) {
    console.log("reviews action: ", action);

    switch (action.type) {
        case 'ADD_REVIEW':
            const newReview = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return state.concat(newReview)
            
        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.id)

        default:

            return state;
    }
}
