import { FC } from 'react';
import { CartItem } from '@components/cart/cart-item/cart-item';
import { useAppSelector} from '@hooks/hooks';

import styles from './styles.module.scss';

const Cart: FC = () => {
  const cart = useAppSelector((state) => state.cartReducer);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.title}>Cart</div>
      {cart.items.length ? (
        <>
          <div className={styles.cartItems}>
            {cart.items.map((item, index) => (
              <CartItem item={item} key={index} index={index}/>)
            )}
          </div>
          <button className={styles.checkoutButton}>Checkout</button>
        </>
        ) : (
        <div className={styles.cartEmpty}>Your cart is empty.</div>
        )
      }
    </div>
  );
};

export { Cart };
