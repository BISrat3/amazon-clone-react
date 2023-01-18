export const initialState ={
    basket: [], 
    user: null,
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
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET" : 
        // return whatever the state is previously
        // change in the basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            // we're gonna copy the basket in temporary variable currently had
                let newBasket = [...state.basket];

                if (index >= 0){
                    // cutting it by one
                    newBasket.splice(index, 1)
                    
                } else {
                    console.warn(`can't remove product( id: ${action.id}) as its not in basket`)
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }
}

export default reducer