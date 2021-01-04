
export interface ItemResponse {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}

export interface ItemHomeResponse {
    name:string,
    id:number,
    image:string,
    category:string,
    count:number,
    quantity: string,
    offer:string,
    old_price:number,
    new_price:number,
    isBulkOrder:boolean,
    bulkItem:number,
    bulkPrice:number
}

export interface MediaUrl {
    m: string;
}

export interface Item {
    title: string;
    link: string;
    media: MediaUrl;
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    author_id: string;
    tags: string;
}

export interface shoppingCartState {
    cartItems: Array<Product>;
}

export const initShoppingCartState: shoppingCartState = {
    cartItems: []
}

export interface Product {
    name: string;
    pricePerItem: number;
    totalPrice: number;
}