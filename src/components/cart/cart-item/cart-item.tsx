import { FC } from 'react'

import { useAppDispatch } from '@hooks/hooks';
import { removeFromCart } from '@store/cart/slice';

import productImage from '@assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '@assets/images/icon-delete.svg'

import styles from './styles.module.scss'

interface ICartItem {
  item: {
    name: string;
    quantity: number;
    price: number;
  }
  index: number;
}

const CartItem: FC<ICartItem> = ({item, index}) => {
  const {name, quantity, price} = item;

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({index}));
  }

  return (
    <div className={styles.itemWrapper}>
      <img className={styles.productImage} src={productImage} alt="product image"/>
      <span className={styles.title}>{name}</span>
      <div className={styles.price}>
        <span className={styles.singlePrice}>${price}</span>
        <span className={styles.multiply}>x {quantity}</span>
        <span className={styles.totalPrice}>${quantity * price}</span>
      </div>
      <img className={styles.deleteIcon} src={deleteIcon} alt="delete icon" onClick={handleRemoveFromCart}/>
    </div>
  )
}

export { CartItem }
