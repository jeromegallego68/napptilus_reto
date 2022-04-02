export const GET_PRODUCTS = 'product/GET_PRODUCTS';
export const UPDATE_CACHE_PRODUCTS = 'product/UPDATE_CACHE_PRODUCTS';

export const GET_PRODUCT_DETAILS = 'product/GET_PRODUCT_DETAILS';
export const UPDATE_CACHE_PRODUCT_DETAILS = 'product/UPDATE_CACHE_PRODUCT_DETAILS';

export function getProducts(payload) {
    return { type: GET_PRODUCTS, payload };
}

export function getProductDetails(payload) {
    return { type: GET_PRODUCT_DETAILS, payload };
}