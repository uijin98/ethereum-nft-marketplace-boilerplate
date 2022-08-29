import { getProduct } from '../ducks/products';
import produce from 'immer';


// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = []

export default function cart(state = initialState, action = {}) {
    console.log("CART ITEMS TEST", state, action)

    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

/**function handleCartAdd(state, payload) {
    console.log("CART ITEMS", state)
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}
**/

function handleCartAdd(state, payload) {
    console.log("CART ITEMS", state, payload)
    return produce(state, draft => {
        console.log("PAYLOAD", draft)

        const itemIndex = draft.findIndex(p => p.productId === payload.productId);
        console.log("INDEX", itemIndex)

        if (itemIndex >= 0) {
          draft[itemIndex].amount += 1;
        } else {
          draft.push({
            ...payload.productId,
            amount: 1,
          });
        }
        console.log("RESULT", draft)

      });
}


function handleCartRemove(state, payload) {

return produce(state, draft => {
    const itemIndex = draft.findIndex(p => p.productId === payload.productId);

    if (itemIndex >= 0) {
      draft.splice(itemIndex, 1);
    }
  });
}
/** 
function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}
*/


// action creators
export function addToCart(productId) {
    console.log("Add to CART", productId)

    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
