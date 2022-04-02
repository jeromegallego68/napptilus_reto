import axios from 'axios';

const apiUrl = "https://front-test-api.herokuapp.com/api";

/** ********************************************** */
/** PRODUCT **/
/** ********************************************** */

export const GetProducts = () => {
    const url = `${apiUrl}/product`;
    return axios.get(url);
};

export const GetProductDetails = (productID) => {
    const url = `${apiUrl}/product/${productID}`;
    return axios.get(url);
};

/** ********************************************** */
/** CART **/
/** ********************************************** */

export const AddProductToCart = (params) => {
    const url = `${apiUrl}/cart`;
    return axios.post(url, params);
}