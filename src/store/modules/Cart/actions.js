export const ADD_PRODUCT_TO_CART = 'cart/ADD_PRODUCT_TO_CART';
export const UPDATE_CACHE_CART = 'cart/UPDATE_CACHE_CART';

export function addProductToCart(payload) {
    return { type: ADD_PRODUCT_TO_CART, payload };
}