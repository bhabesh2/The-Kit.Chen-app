import { createStore } from 'redux';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the item does not exist in the cart, add it with quantity 1
        const updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return { ...state, cartItems: updatedCartItems };
      }

    case 'REMOVE_FROM_CART':
      const itemIdToRemove = action.payload;
      const updatedCartItemsAfterRemove = state.cartItems.filter(item => item.id !== itemIdToRemove);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAfterRemove));
      return { ...state, cartItems: updatedCartItemsAfterRemove };

    case 'INCREASE_QUANTITY':
      const itemIdToIncrease = action.payload;
      const updatedCartItemsAfterIncrease = state.cartItems.map(item =>
        item.id === itemIdToIncrease ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAfterIncrease));
      return { ...state, cartItems: updatedCartItemsAfterIncrease };

    case 'DECREASE_QUANTITY':
      const itemIdToDecrease = action.payload;
      const updatedCartItemsAfterDecrease = state.cartItems.map(item =>
        item.id === itemIdToDecrease ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAfterDecrease));
      return { ...state, cartItems: updatedCartItemsAfterDecrease };

    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
