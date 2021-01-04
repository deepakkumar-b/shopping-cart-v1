import { State } from '@ngrx/store';
import { initShoppingCartState, shoppingCartState } from '../app.interface';
import { ShoppingCartActions, ShoppingCartActionTypes } from './shopping-cart.actions';

export function reducer (state = initShoppingCartState, action: ShoppingCartActions): shoppingCartState {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_PRODUCT_TO_CART: {
      return {
        ... state
      };
    }

    default: {
      return state;
    }
  }
}