import { Action } from '@ngrx/store';

export enum ShoppingCartActionTypes {
    ADD_PRODUCT_TO_CART = '[ShoppingCartActionTypes] ADD PRODUCT TO CART'
}

export class AddProductToCartAction implements Action {
  readonly type = ShoppingCartActionTypes.ADD_PRODUCT_TO_CART;
  constructor(public payload: any) {}
}

export type ShoppingCartActions = AddProductToCartAction;
