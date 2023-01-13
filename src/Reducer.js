export const initialState ={
    basket: [], 
}

// Selector 
export const getBasketTotal = (basket) =>
    // the purpose of reducer is map through basket - 
    basket?.reduce((amount, item) => item.price + amount, 0)


// state and action - do you want to update or delete from the basket
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        // whenever we want to add to basket
        case "ADD_TO_BASKET": 
            return {
                // whatever the state originally 
                ...state,
                basket: [...state.basket, action.item], 
            }
        default: 
        return state;
    }
}

export default reducer