import { FC, useState } from 'react';

import { ImagesSlider } from '@components/product-page/images-slider/images-slider';

import styles from './styles.module.scss';

import iconCart from '@assets/images/icon-cart.svg';
import iconPlus from '@assets/images/icon-plus.svg';
import iconMinus from '@assets/images/icon-minus.svg';

const ProductPage: FC = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pictures}>
        <ImagesSlider/>
      </div>
      <div className={styles.info}>
        <span className={styles.brand}>sneaker company</span>
        <span className={styles.title}>Fall Limited Edition Sneakers</span>
        <p className={styles.description}>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole,
          they'll withstand everything the weather can offer.</p>
        <div className={styles.price}>
          <span className={styles.priceValue}>$125.00</span> <span className={styles.discount}>50%</span>
          <span className={styles.oldPriceValue}>$255.00</span>
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
          <button className={styles.addToCart}><img src={iconCart} alt="cart"/> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export { ProductPage };
