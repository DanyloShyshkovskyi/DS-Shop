import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styles from './CartProducts.module.scss';
import CartItem from './CartItem';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div className={styles.p__container}>
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;
