import {ADD_PRODUCT_BASKET} from './types';
import {DELL_NUMBERS_BASKET} from './types';
import {DELLALL_NUMBERS_BASKET} from './types';
import {DELLALL} from './types';

export const addBasket = (product) => {
    return(dispatch) => {
        console.log("Adding to Basket");
        console.log("Product:", product);
        dispatch({
            type:ADD_PRODUCT_BASKET,
            name:product.name,
            brand:product.brand,
            img:product.img,
            price:product.price
        })
    }
}


export const dellBasket = (product) => {
    return(dispatch) => {
        console.log("Minus to Basket");
        dispatch({
            type:DELL_NUMBERS_BASKET,
            name:product.name,
            brand:product.brand,
            img:product.img,
            price:product.price
        })
    }
}

export const dellAllBasket = (product) => {
    return(dispatch) => {
        dispatch({
            type:DELLALL_NUMBERS_BASKET,
            name:product.name,
            brand:product.brand,
            img:product.img,
            price:product.price

        })
    }
}

export const dellAll = (product) => {
    return(dispatch) => {
        dispatch({
            type:DELLALL,
            name:product.name,
            brand:product.brand,
            img:product.img,
            price:product.price

        })
    }
}