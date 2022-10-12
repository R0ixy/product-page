import { FC, useState } from 'react';

import { ImagesSlider } from '@components/product-page/images-slider/images-slider';
import { useAppDispatch } from '@hooks/hooks';
import { addToCart } from '@store/cart/slice';

import iconCart from '@assets/images/icon-cart.svg';
import iconPlus from '@assets/images/icon-plus.svg';
import iconMinus from '@assets/images/icon-minus.svg';

import styles from './styles.module.scss';

const product = {
  name: 'Fall Limited Edition Sneakers',
  originalPrice: 250,
  price: 125,
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  discount: 50,
}

const ProductPage: FC = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (quantity) {
      dispatch(addToCart({name: product.name, quantity, price: product.price}));
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pictures}>
        <ImagesSlider/>
      </div>
      <div className={styles.info}>
        <span className={styles.brand}>sneaker company</span>
        <span className={styles.title}>{product.name}</span>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          <span className={styles.priceValue}>${product.price}</span> <span className={styles.discount}>{product.discount}%</span>
          <span className={styles.oldPriceValue}>${product.originalPrice}</span>
        </div>
        <div className={styles.buttons}>
          <div className={styles.quantity}>
            <button onClick={() => {
              setQuantity((prevState) => prevState != 0 ? prevState - 1 : 0)
            }}>
              <img src={iconMinus} alt="minus"/>
            </button>
            <div>{quantity}</div>
            <button onClick={() => {
              setQuantity((prevState) => prevState + 1)
            }}>
              <img src={iconPlus} alt="plus"/>
            </button>
          </div>
          <button className={styles.addToCart} onClick={handleAddToCart}><img src={iconCart} alt="cart"/> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductPage };
